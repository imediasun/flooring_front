<?php

namespace App\Http\Controllers;

use Auth;
use Grpc\ChannelCredentials;
use Illuminate\Http\Request;
use Inertia\Response;
use Users\SignUpRequest;
use Users\UserServiceClient;

class TestController extends Controller {

    public function test(Request $request): void {
//        $credentials = ChannelCredentials::createInsecure();
//
//        $client = new UserServiceClient(env('GRPC_SERVER'), [
//            'credentials' => $credentials,
//        ]);

        // DO: sign up
//        $signUpRequest = new SignUpRequest;
//        $signUpRequest->setFirstName("Illya");
//        $signUpRequest->setLastName("Marchenko");
//        $signUpRequest->setEmail("stuzer05@gmail.com");
//        $signUpRequest->setPassword("admin");
//        list($signUpResponse, $signUpStatus) = $client->SignUp($signUpRequest)->wait();

        // err: user already exists
//        if ($signUpStatus->code == 6) {
//            dd($signUpStatus->details);
//        }



        $credentials = [
            'email' => 'stuzer05@gmail.com',
            'password' => 'admin',
        ];
        $user = Auth::attempt($credentials);
        dd($user);

//        $user = Auth::check();
//        dd($user);

//        $user = Auth::user();
//        dd($user);

//        $user = Auth::logout();
//        dd($user);
    }

}
