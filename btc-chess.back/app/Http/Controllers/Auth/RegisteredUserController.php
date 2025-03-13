<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Rules\UniqueEmailInOnboarding;
use Grpc\ChannelCredentials;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Users\SignUpRequest;
use Users\UserServiceClient;
use Users\SignInRequest;
use Users\MeRequest;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        // Set up gRPC client
        $credentials = ChannelCredentials::createInsecure();
        $client = new UserServiceClient(env('GRPC_SERVER'), [
            'credentials' => $credentials,
        ]);

        // Validate request
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => ['required', 'string', 'email', 'max:255'], // Unique validation should be handled in the microservice
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        // Create gRPC SignUpRequest
        $signUpRequest = new SignUpRequest();
        $signUpRequest->setFirstName($request->name);
        $signUpRequest->setLastName($request->name);
        $signUpRequest->setEmail($request->email);
        $signUpRequest->setPassword($request->password);
        $signUpRequest->setRoleName('Customer');

        list($signUpResponse, $signUpStatus) = $client->SignUp($signUpRequest)->wait();

        if ($signUpStatus->code !== 0) {
            return back()->withErrors([
                'sign_up_error' => "SignUp failed: {$signUpStatus->details}",
            ]);
        }

        // After successful sign-up, perform sign-in to get the token
        $signInRequest = new SignInRequest();
        $signInRequest->setEmail($request->email);
        $signInRequest->setPassword($request->password);

        list($signInResponse, $signInStatus) = $client->SignIn($signInRequest)->wait();

        if ($signInStatus->code !== 0) {
            return back()->withErrors([
                'sign_in_error' => "SignIn failed: {$signInStatus->details}",
            ]);
        }

        // Get the token from SignInResponse
        $token = $signInResponse->getToken();

        // Retrieve user data using the MeRequest
        $meRequest = new MeRequest();
        $meRequest->setToken($token);
        list($meResponse, $meStatus) = $client->Me($meRequest)->wait();

        if ($meStatus->code !== 0) {
            return back()->withErrors([
                'me_error' => "Failed to retrieve user info: {$meStatus->details}",
            ]);
        }

        // Construct user attributes
        $userAttributes = [
            'id' => $meResponse->getId(),
            'email' => $meResponse->getEmail(),
            'first_name' => $meResponse->getFirstName(),
            'last_name' => $meResponse->getLastName(),
        ];

        // Login user using GrpcGuard
        $user = new User($userAttributes);
        Auth::guard()->login($user);

        // Store token and save session
        session(['api_token' => $token]);
        session()->save();

        Log::info('Session after login:', session()->all());

        // Redirect to dashboard
        return redirect(route('dashboard'));
    }


}
