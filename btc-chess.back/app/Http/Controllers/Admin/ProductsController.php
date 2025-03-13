<?php
namespace App\Http\Controllers\Admin;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Services\Photos;
use Auth;
use Illuminate\Http\Request;

class ProductsController {

    const PATH_PRODUCT_PHOTOS = 'photos/products/';

    public function index(Request $request)
    {
        $products = Product::paginate(2);
        $result = $products->toArray();
        $result['data'] = ProductResource::collection($products);
        return response()->json($result);
    }

    public function store(Request $request) {
        $smallImage = Photos::savePhotoFromBase64($request->small_photo, self::PATH_PRODUCT_PHOTOS);

        $product = Product::create([
            'name' => $request->name,
            'slug' => $request->slug,
            'new_arrival' => $request->new_arrival,
            'is_active' => $request->is_active,
            'width' => $request->width,
            'height' => $request->height,
            'depth' => $request->depth,
            'brand_id' => $request->brand_id,
            'category_id' => $request->category_id,
            'color_id' => $request->color_id,
            'waterproof_id' => $request->waterproof_id,
            'small_photo' => $smallImage,
        ]);

        if ($request->has('intend_ids') && is_array($request->intend_ids)) {
            $product->intends()->sync($request->intend_ids);
        }

        if ($request->has('stock_ids') && is_array($request->stock_ids)) {
            $product->stocks()->sync($request->stock_ids);
        }

        return response()->json([
            'status' => 1,
        ]);
    }

    public function show(Request $request, $id) {
        $product = Product::findOrFail($id);
        return response()->json(new ProductResource($product));
    }

    public function update(Request $request, $id) {
        $product = Product::findOrFail($id);
        $smallImage = Photos::savePhotoFromBase64($request->small_photo, self::PATH_PRODUCT_PHOTOS);

        $update = [
            'name' => $request->name,
            'slug' => $request->slug,
            'new_arrival' => $request->new_arrival,
            'is_active' => $request->is_active,
            'width' => $request->width,
            'height' => $request->height,
            'depth' => $request->depth,
            'brand_id' => $request->brand_id,
            'category_id' => $request->category_id,
            'color_id' => $request->color_id,
            'waterproof_id' => $request->waterproof_id,
        ];

        if ($smallImage) {
            Photos::deleteOne(ProductsController::PATH_PRODUCT_PHOTOS . $product->small_photo);
            $update['small_photo'] = $smallImage;
        }

        $product->update($update);

        if ($request->has('intend_ids') && is_array($request->intend_ids)) {
            $product->intends()->sync($request->intend_ids);
        }

        if ($request->has('stock_ids') && is_array($request->stock_ids)) {
            $product->stocks()->sync($request->stock_ids);
        }

        return response()->json(['status' => 1]);

    }

    public function destroy(Request $request, $id) {
        $product = Product::findOrFail($id);
        Photos::delete($product);
        $product->delete();
        return response()->json(['status' => 1]);
    }
}
