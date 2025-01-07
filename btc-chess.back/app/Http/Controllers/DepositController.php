<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Grpc\ChannelCredentials;
use Payment\PaymentServiceClient;
use Payment\InitiateDepositRequest;
use Users\UserServiceClient;

class DepositController extends Controller
{
    protected $client;

    public function __construct()
    {
        // Инициализация клиента gRPC
        $credentials = ChannelCredentials::createInsecure();
        $client = new PaymentServiceClient(env('GRPC_PAYMENT_SERVER'), [
            'credentials' => $credentials,
        ]);
    }

    public function deposit(Request $request)
    {
        // Валидация входных данных
        $request->validate([
            'user_id' => 'required|string',
            'amount' => 'required|numeric|min:0.01'
        ]);

        $userId = $request->input('user_id');
        $amount = $request->input('amount');

        // Формируем gRPC запрос
        $grpcRequest = new InitiateDepositRequest();
        $grpcRequest->setUserId($userId);
        $grpcRequest->setAmount($amount);

        list($response, $status) = $this->client->InitiateDeposit($grpcRequest)->wait();

        if ($status->code !== \Grpc\STATUS_OK) {
            return response()->json([
                'error' => 'Failed to process deposit',
                'details' => $status->details
            ], 500);
        }

        return response()->json([
            'transaction_id' => $response->getTransactionId(),
            'status' => $response->getStatus(),
        ]);
    }
}
