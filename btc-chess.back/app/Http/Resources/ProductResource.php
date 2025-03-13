<?php

namespace App\Http\Resources;

use App\Http\Controllers\Admin\ProductsController;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    public function toArray($request) {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'small_photo' => ProductsController::PATH_PRODUCT_PHOTOS . $this->small_photo,
            'width' => $this->width,
            'height' => $this->height,
            'depth' => $this->depth,
            'new_arrival' => $this->new_arrival ? 1 : 0,
            'brand_name' => $this->brand?->name,
            'brand_slug' => $this->brand?->slug,
            'brand_id' => $this->brand?->id,
            'category_name' => $this->category?->name,
            'category_slug' => $this->category?->slug,
            'category_id' => $this->category?->id,
            'color_id' => $this->color?->id,
            'color_name' => $this->color?->name,
            'color_photo' => $this->color?->photo,
            'color_hash' => $this->color?->hash,
            'waterproof_id' => $this->waterproof?->id,
            'waterproof_name' => $this->waterproof?->name,
            'intend_ids' => $this->intends->pluck('id'),
            'stock_ids' => $this->stocks->pluck('id'),
            'is_active' => $this->is_active ? 1 : 0,
        ];
    }
}
