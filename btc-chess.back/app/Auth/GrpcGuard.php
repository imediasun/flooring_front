<?php

namespace App\Auth;

use Illuminate\Auth\GuardHelpers;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Contracts\Auth\UserProvider;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use Users\LogoutRequest;
use Users\MeRequest;
use Users\SignInRequest;
use Users\UserServiceClient;
use Illuminate\Contracts\Auth\Authenticatable;

class GrpcGuard implements Guard
{
    use GuardHelpers;

    protected $provider;
    protected $request;
    protected $user;
    protected UserServiceClient $client;

    public function __construct(UserProvider $provider, Request $request, UserServiceClient $client)
    {
        $this->provider = $provider;
        $this->request = $request;
        $this->client = $client;
    }

    public function check()
    {
        return $this->user() !== null;
    }

    public function user()
    {
        if ($this->user) {
            return $this->user;
        }

        // Check if user data is stored in the session
        $userData = session('user');
        if ($userData && is_array($userData)) {
            $this->user = new User($userData);
            return $this->user;
        }

        // Fallback to gRPC call
        $token = session('api_token');
        Log::info('Token: ' . $token);
        if (!empty($token)) {
            $meRequest = new MeRequest();
            $meRequest->setToken($token);
            list($meResponse, $meStatus) = $this->client->Me($meRequest)->wait();

            if ($meStatus->code === 0) {
                Log::info('MeResponse ID: ' . $meResponse->getId());
                $userAttributes = [
                    'id' => $meResponse->getId(),
                    'email' => $meResponse->getEmail(),
                    'first_name' => $meResponse->getFirstName(),
                    'last_name' => $meResponse->getLastName(),
                ];
                $this->user = new User($userAttributes);
                // Store user data in session
                session(['user' => $userAttributes]);
                return $this->user;
            }
        }

        return null;
    }

    public function attempt(array $credentials = [], $remember = false)
    {
        $signInRequest = new SignInRequest();
        $signInRequest->setEmail($credentials['email']);
        $signInRequest->setPassword($credentials['password']);
        list($signInResponse, $signInStatus) = $this->client->SignIn($signInRequest)->wait();

        if ($signInStatus->code === 0) {
            // Store the token in the session
            session(['api_token' => $signInResponse->getToken()]);
            Log::info('Token stored in session: ' . $signInResponse->getToken());
            session()->save();
            Log::info('Session after saving token:', session()->all());
            // Retrieve user data
            $meRequest = new MeRequest();
            $meRequest->setToken($signInResponse->getToken());
            list($meResponse, $meStatus) = $this->client->Me($meRequest)->wait();

            if ($meStatus->code === 0) {
                $userAttributes = [
                    'id' => $meResponse->getId(),
                    'email' => $meResponse->getEmail(),
                    'first_name' => $meResponse->getFirstName(),
                    'last_name' => $meResponse->getLastName(),
                ];

                $this->user = new User($userAttributes);
                session(['user' => $userAttributes]);

                return true;
            }
        }

        return false;
    }


    public function validate(array $credentials = [])
    {
        $signInRequest = new SignInRequest();
        $signInRequest->setEmail($credentials['email']);
        $signInRequest->setPassword($credentials['password']);
        list($signInResponse, $signInStatus) = $this->client->SignIn($signInRequest)->wait();

        return $signInStatus->code === 0;
    }

    public function logout()
    {
        $token = session('api_token');

        if (!empty($token)) {
            $logoutRequest = new LogoutRequest();
            $logoutRequest->setToken($token);
            $this->client->Logout($logoutRequest)->wait();
        }

        // Clear session data
        session()->forget(['api_token', 'user']);

        // Clear the user property
        $this->user = null;
    }

    public function login(Authenticatable $user)
    {
        $this->setUser($user);
        session(['user' => $user->toArray()]);
    }

    public function setUser(Authenticatable $user)
    {
        $this->user = $user;
        // Optionally, store the user in the session
        session(['user' => $user->toArray()]);
        return $this;
    }

    public function retrieveByToken($identifier, $token)
    {
        return null;
    }
}
