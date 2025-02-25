<?php

namespace App\Http\Controllers;

use Grpc\ChannelCredentials;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;
use Users\SignUpRequest;
use Users\UserServiceClient;
use Illuminate\Support\Facades\Route;

class AppointmentController extends Controller
{
    public function submit(Request $request)
    {
        $validatedData = $request->validate([
            'firstName' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'required|string',
            'date' => 'required|date',
            'time' => 'required|string',
            'message' => 'required|string',
        ]);

        // Отправка письма
        Mail::send('emails.appointment', ['data' => $validatedData], function ($message) use ($validatedData) {
            $message->to('elitehousewa@gmail.com') // Email администратора
            ->subject('New Appointment Request')
                ->from($validatedData['email'], $validatedData['firstName'] . ' ');
        });

        return response()->json(['message' => 'Appointment submitted successfully.'], 200);
    }
}
