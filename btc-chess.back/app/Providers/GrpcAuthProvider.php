<?php

namespace App\Providers;

use App\Auth\GrpcGuard;
use Auth;
use Grpc\ChannelCredentials;
use Illuminate\Support\ServiceProvider;
use App\Auth\GrpcUserProvider;
use Users\UserServiceClient;

class GrpcAuthProvider extends ServiceProvider
{
    public function register()
    {
        $credentials = ChannelCredentials::createInsecure();

        $client = new UserServiceClient(env('GRPC_SERVER'), [
            'credentials' => $credentials,
        ]);

        Auth::provider('grpc', function ($app, array $config) use ($client) {
            return new GrpcUserProvider($client);
        });

        Auth::extend('grpc', function ($app, $name, array $config) use ($client) {

            return new GrpcGuard(
                Auth::createUserProvider($config['provider']),
                $app['request'],
                $client // Inject gRPC client
            );
        });
    }

    public function boot()
    {
        //
    }
}
