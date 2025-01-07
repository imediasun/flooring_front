<?php

namespace App\Http\Controllers;

use Grpc\ChannelCredentials;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use Users\SignUpRequest;
use Users\UserServiceClient;

class GameController extends Controller {

    public function index(Request $request): Response
    {

        //dd( Auth::user());
        return Inertia::render('Game/Index', [
            'auth' => [
                'user' => Auth::user(), // Ensure this is not null
            ],
            'status' => session('status'),
        ]);
    }

}
