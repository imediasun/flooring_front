<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';

    protected $fillable = [
        'name',
        'slug',
        'brand_id',
        'color_id',
        'category_id',
        'waterproof_id',
        'new_arrival',
        'width',
        'height',
        'depth',
        'is_active',
        'small_photo',
    ];

    public function intends(): BelongsToMany
    {
        return $this->belongsToMany(Intend::class, 'intend_product');
    }

    public function brand(): BelongsTo
    {
        return $this->belongsTo(Brand::class);
    }

    public function color(): BelongsTo
    {
        return $this->belongsTo(Color::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function waterproof(): BelongsTo
    {
        return $this->belongsTo(Waterproof::class);
    }

    public function stocks(): BelongsToMany
    {
        return $this->belongsToMany(Stock::class, 'stock_product');
    }

}
