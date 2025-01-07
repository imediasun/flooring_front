<?php

namespace App\Auth;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Auth\UserProvider;
use App\Models\User;
use Users\MeRequest;
use Users\SignInRequest;
use Users\UserServiceClient;

class GrpcUserProvider implements UserProvider
{
    protected UserServiceClient $client;

    public function __construct(UserServiceClient $client)
    {
        $this->client = $client;
    }

    public function retrieveById($identifier)
    {
        return null;
    }

    public function retrieveByToken($identifier, $token)
    {
        if (session('api_token') === $token) {
            $meRequest = new MeRequest;
            $meRequest->setToken($token);
            list($meResponse, $meStatus) = $this->client->Me($meRequest)->wait();

            if ($meStatus->code === 0) {
                return new User([
                    'id' => $meResponse->GetId(),
                    'email' => $meResponse->GetEmail(),
                    'first_name' => $meResponse->GetFirstName(),
                    'last_name' => $meResponse->GetLastName(),
                    'pass'
                ]);
            }
        }

        return null;
    }

    public function updateRememberToken(Authenticatable $user, $token)
    {
        // Not needed for this example
    }

    public function retrieveByCredentials(array $credentials)
    {
        $signInRequest = new SignInRequest;
        $signInRequest->setEmail($credentials['email']);
        $signInRequest->setPassword($credentials['password']);
        list($signInResponse, $signInStatus) = $this->client->SignIn($signInRequest)->wait();

        // Success
        if ($signInStatus->code === 0) {
            // Store the token
            session(['api_token' => $signInResponse->GetToken()]);

            // Get user
            $meRequest = new MeRequest;
            $meRequest->setToken($signInResponse->GetToken());
            list($meResponse, $meStatus) = $this->client->Me($meRequest)->wait();

            return new User([
                'id' => $meResponse->GetId(),
                'email' => $meResponse->GetEmail(),
                'first_name' => $meResponse->GetFirstName(),
                'last_name' => $meResponse->GetLastName(),
            ]);
        }

        return null;
    }

    public function validateCredentials(Authenticatable $user, array $credentials)
    {
        $signInRequest = new SignInRequest;
        $signInRequest->setEmail($credentials['email']);
        $signInRequest->setPassword($credentials['password']);
        list($signInResponse, $signInStatus) = $this->client->SignIn($signInRequest)->wait();

        return $signInStatus->code === 0;
    }

    public function rehashPasswordIfRequired(Authenticatable $user, #[\SensitiveParameter] array $credentials, bool $force = false) {
        // TODO: Implement rehashPasswordIfRequired() method.
    }
}
