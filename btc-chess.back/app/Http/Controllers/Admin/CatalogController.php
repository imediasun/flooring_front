<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\AdminICatalogItemResource;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Intend;
use App\Models\Size;
use App\Models\Stock;
use App\Models\Waterproof;
use App\Models\Color;

class CatalogController
{

    const CATALOG_MAPS = [
        'brands' => Brand::class,
        'intends' => Intend::class,
        'stocks' => Stock::class,
        'waterproofs' => Waterproof::class,
        'categories' => Category::class,
        'sizes' => Size::class,
        'colors' => Color::class,
    ];

    protected function fillDataForCatalog($maps)
    {
        $data = [];

        foreach($maps as $key => $className) {
            if ($key === 'colors') {
                $items = $className::all();
            } else {
                $items = $className::where('is_active', true)->get();
            }
            $data[$key] = AdminICatalogItemResource::collection($items);
        }

        return $data;
    }

    public function index()
    {
        $maps = self::CATALOG_MAPS;
        unset($maps['sizes']);
        return response()->json($this->fillDataForCatalog($maps));
    }

    public function filter(Request $request)
    {
        return response()->json($this->fillDataForCatalog(self::CATALOG_MAPS));
    }

}
