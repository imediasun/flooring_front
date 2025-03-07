<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{

    const CONTACT_ALIAS = 'contact';
    const WHO_WE_ARE_ALIAS = 'who_we_are';
    const MAIN_ALIAS = 'main';

    use HasFactory;

    protected $table = 'pages';

    protected $fillable = [
        'name',
        'alias',
        'settings',
    ];


    protected $casts = [
        'settings' => 'array',
    ];
}
