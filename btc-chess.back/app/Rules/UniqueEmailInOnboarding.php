<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Users\UserServiceClient;
use Grpc\ChannelCredentials;

class UniqueEmailInOnboarding implements Rule
{
    private $client;

    public function __construct()
    {
        $credentials = ChannelCredentials::createInsecure();
        $this->client = new UserServiceClient(env('GRPC_SERVER'), [
            'credentials' => $credentials,
        ]);
    }

    public function passes($attribute, $value)
    {
// Создайте и отправьте запрос gRPC для проверки уникальности email
        $request = new \App\Grpc\CheckEmailRequest();
        $request->setEmail($value);

        [$response, $status] = $this->client->CheckEmail($request)->wait();

// Успешная проверка: если email не существует
        return $response && $response->getIsUnique();
    }

    public function message()
    {
        return 'The :attribute has already been taken.';
    }
}
