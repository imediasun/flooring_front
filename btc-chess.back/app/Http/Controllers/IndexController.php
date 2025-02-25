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
use Illuminate\Support\Facades\Route;

class IndexController extends Controller {

    public function index(Request $request): Response
    {

        return Inertia::render('Home', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    }

    public function catalog(Request $request): Response
    {

        return Inertia::render('Catalog', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    }

    public function rooms($room_name,Request $request): Response
    {
        return Inertia::render($room_name, [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    }

}
