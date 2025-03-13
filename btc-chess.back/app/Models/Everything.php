<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Everything extends Model
{
    use HasFactory;

    protected $table = 'everythings';

    protected $fillable = [
        'small_caption',
        'big_caption',
        'big_photo',
        'small_photo',
    ];
}
