<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Blog;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Color;
use App\Models\Everything;
use App\Models\Faq;
use App\Models\Intend;
use App\Models\Page;
use App\Models\Product;
use App\Models\Size;
use App\Models\Stock;
use App\Models\Waterproof;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller {

    const DEFAULT_LIMIT = 1;
    const DEFAULT_PAGE = 1;


    public function index(Request $request): Response
    {
        return Inertia::render('Home', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'faqs' => Faq::where('is_active', true)->get(),
            'mainPage' => Page::where('alias', Page::MAIN_ALIAS)->first(),
            'contactPage' => Page::where('alias', Page::CONTACT_ALIAS)->first(),
            'whoWePage' => Page::where('alias', Page::WHO_WE_ARE_ALIAS)->first(),
            'everythings' => Everything::all(),
            //'articles' =>  Article::first(),
            'blogs' => Blog::where('is_active', true)->orderBy('id','asc')->limit(2)->get()
        ]);
    }

    public function filter(Request $request): JsonResponse
    {

//        arrival: selectedArrival === 1 ? 1 : undefined,
//            cat: selectedCat !== 'all' ? selectedCat : undefined,
//            'sizes[]': openSizeFilter ? selectedSizes : undefined,
//            'intends[]': openIntendFilter ? selectedIntends : undefined,
//            'colors[]': openColorFilter ? selectedColors : undefined,
//            'stocks[]': openStockFilter ? selectedStocks : undefined,
//            'waterproofs[]': openWaterproofFilter ? selectedWaterproofs : undefined,
//            'brands[]': openBrandFilter ? selectedBrands : undefined,
//
        $perPage = $request->input('limit', self::DEFAULT_LIMIT);
        $page = $request->input('page', self::DEFAULT_PAGE);

        $query = Product::query()->where('is_active', true);

        if ($request->has('arrival')) {
            $query->where('new_arrival', 1);
        }

        if ($request->has('brands')) {
            $query->whereHas('brand', function ($q) use ($request) {
                $q->whereIn('slug', $request->input('brands'));
            });
        }

        if ($request->has('cat')) {
            $query->whereHas('category', function ($q) use ($request) {
                $q->where('slug', $request->input('cat'));
            });
        }

        if ($request->has('colors')) {
            $query->whereHas('color', function ($q) use ($request) {
                $q->whereIn('name', $request->input('colors'));
            });
        }

        if ($request->has('intends')) {
            $query->whereHas('intends', function ($q) use ($request) {
                $q->whereIn('slug', $request->input('intends'));
            });
        }

        if ($request->has('sizes')) {
            $sizes = (array) $request->input('sizes');
            $sizeDetails = Size::whereIn('slug', $sizes)->get();

            $widths = $sizeDetails->pluck('width')->toArray();
            $heights = $sizeDetails->pluck('height')->toArray();
            $depths = $sizeDetails->pluck('depth')->toArray();
            $query->whereIn('width', $widths)
                ->whereIn('height', $heights)
                ->whereIn('depth', $depths);
         }

        if ($request->has('stocks')) {
            $query->whereHas('stocks', function ($q) use ($request) {
                $q->whereIn('slug', $request->input('stocks'));
            });
        }

        if ($request->has('waterproofs')) {
            $query->whereHas('waterproof', function ($q) use ($request) {
                $q->whereIn('slug', $request->input('waterproofs'));
            });
        }

        $items = $query->paginate($perPage, ['*'], 'page', $page);

        $result = $items->toArray();
        $result['data'] = ProductResource::collection($items);

        return response()->json($result);

    }

    public function catalog(Request $request): Response
    {
        return Inertia::render('Catalog', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'contactPage' => Page::where('alias', Page::CONTACT_ALIAS)->first(),
            'categories' => Category::where('is_active', 1)->get(),
            'sizes' => Size::where('is_active', 1)->get(),
            'colors' => Color::all(),
            'intends' => Intend::where('is_active', 1)->get(),
            'stocks' => Stock::where('is_active', 1)->get(),
            'waterproofs' => Waterproof::where('is_active', 1)->get(),
            'brands' => Brand::where('is_active', 1)->get(),
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
