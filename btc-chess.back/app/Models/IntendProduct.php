<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IntendProduct extends Model
{
    use HasFactory;

    protected $table = 'intend_product';
    protected $fillable = ['product_id', 'intend_id'];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function intend()
    {
        return $this->belongsTo(Intend::class);
    }
}

