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

    const DEFAULT_LIMIT = 10;
    const DEFAULT_PAGE = 10;
    public function index(Request $request): Response
    {
        return Inertia::render('Home', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);

    }

    public function filter(Request $request): Response
    {
        $perPage = $request->input('limit', self::DEFAULT_LIMIT);
        $page = $request->input('page', self::DEFAULT_PAGE);
//        $products = Product::paginate($perPage, ['*'], 'page', $page);

//        return response()->json([
//            'data' => $products->items(),
//            'meta' => [
//                'current_page' => $products->currentPage(),
//                'per_page' => $products->perPage(),
//                'total' => $products->total(),
//                'last_page' => $products->lastPage(),
//            ]
//        ]);
    }

    public function catalog(Request $request): Response
    {

        return Inertia::render('Catalog', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'categories' => [
                [
                    'id' => 1,
                    'name' => 'Flooring Panels and Wood Flooring Design2',
                    'alias' => 'asfasdf'
                ],
                [
                    'id' => 2,
                    'name' => 'Stone and Quarts Tile for Bathroom',
                    'alias' => 'asfasdf2'
                ],
                [
                    'id' => 3,
                    'name' => 'Quarts Countertops',
                    'alias' => 'asfasdf3'
                ]
            ],
            'sizes' => [
                [
                    'id' => 1,
                    'name' => '1215x235x12mm',
                    'amount' => 3,
                    'alias' => 'asfasdf3'
                ],
                [
                    'id' => 2,
                    'name' => '1415x235x13mm',
                    'amount' => 4,
                    'alias' => 'asfasdf4'
                ],
                [
                    'id' => 3,
                    'name' => '1315x235x14mm',
                    'amount' => 5,
                    'alias' => 'asfasdf5'
                ],

            ],
            'colors' => [
                [
                    'id' => 1,
                    'name' => 'Vienna Oak',
                    'alias' => 'asfasdf34',
                    'img' => '/color4-Cf3ilClC.png'
                ],
                [
                    'id' => 2,
                    'name' => 'Vienna Oak2',
                    'alias' => 'asfasdf41',
                    'img' => '/color3-DuG8ZDBS.png'
                ],
            ],
            'intends' => [
                [
                    'id' => 1,
                    'name' => 'kitchen',
                    'alias' => 'asfasdf343',
                    'amount' => 34
                ],
                [
                    'id' => 2,
                    'name' => 'bathroom',
                    'alias' => 'asfasdf4133',
                    'amount' => 35
                ],
                [
                    'id' => 3,
                    'name' => 'living room',
                    'alias' => 'asfasdf433',
                    'amount' => 36
                ],
            ],
            'stocks' => [
                [
                    'id' => 1,
                    'name' => 'in Washington',
                    'alias' => 'asfasdf343',
                    'amount' => 3
                ],
                [
                    'id' => 2,
                    'name' => 'in California',
                    'alias' => 'in California',
                    'amount' => 35
                ],
            ],
            'waterproofs' => [
                [
                    'id' => 1,
                    'name' => 'waterproof1',
                    'alias' => 'waterproof1',
                    'amount' => 3
                ],
                [
                    'id' => 2,
                    'name' => 'waterproof2',
                    'alias' => 'waterproof2',
                    'amount' => 34
                ],
            ],
            'brands' => [
                [
                    'id' => 1,
                    'name' => 'brand1',
                    'alias' => 'brand1',
                    'amount' => 3
                ],
                [
                    'id' => 2,
                    'name' => 'brand2',
                    'alias' => 'brand2',
                    'amount' => 34
                ],
            ]
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
