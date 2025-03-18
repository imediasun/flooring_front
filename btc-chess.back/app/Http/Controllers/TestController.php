<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\Request;
use Inertia\Response;
use Users\SignUpRequest;
use Users\UserServiceClient;

class TestController extends Controller {

    public function test(Request $request): void {
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
