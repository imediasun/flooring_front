<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Intend extends BaseModel
{
    use HasFactory;

    protected $table = 'intends';

    public function products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class, 'intend_product');
    }

}
