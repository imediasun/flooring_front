<?php

use App\Http\Controllers\Admin\ArticlesController;
use App\Http\Controllers\Admin\BlogsController;
use App\Http\Controllers\Admin\BrandsController;
use App\Http\Controllers\Admin\CatalogController;
use App\Http\Controllers\Admin\CategoriesController;
use App\Http\Controllers\Admin\ColorsController;
use App\Http\Controllers\Admin\FaqsController;
use App\Http\Controllers\Admin\IntendsController;
use App\Http\Controllers\Admin\ProductsController;
use App\Http\Controllers\Admin\StocksController;
use App\Http\Controllers\Admin\SizesController;
use App\Http\Controllers\Admin\WaterproofsController;
use App\Http\Controllers\Admin\PagesController;
use App\Http\Controllers\Admin\EverythingsController;


use App\Http\Controllers\GameController;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TestController;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AppointmentController;

Route::post('/appointments', [AppointmentController::class, 'submit'])->name('appointments.submit');


Route::get('/', [IndexController::class, 'index'])->name('index');
Route::get('/catalog', [IndexController::class, 'catalog'])->name('catalog');
Route::get('/filter-products', [IndexController::class, 'filter'])->name('filter');
Route::get('/rooms/{room_name}', [IndexController::class, 'rooms'])->name('index');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/test', [TestController::class, 'test']);
Route::get('/game', [GameController::class, 'index'])->middleware(['auth', 'verified'])->name('game.index');


Route::get('chess-game/{path}', function ($path) {
    $filePath = base_path('chess-game/' . $path);

    if (File::exists($filePath)) {
        return response()->file($filePath);
    }

    abort(404);
})->where('path', '.*');


//    GET /categories — index (список categories)
//    GET /categories/create — create (форма для створення)
//    POST /categories — store (збереження нового category)
//    GET /categories/{id} — show (показати category)
//    GET /categories/{id}/edit — edit (форма для редагування)
//    PUT /PATCH /categories/{id} — update (оновлення category)
//    DELETE /categories/{id} — destroy (видалення category)

Route::prefix('/api/admin')->group(function () {

    Route::resource('/categories', CategoriesController::class)->except([
        'create', 'edit',
    ]);

    Route::resource('/brands', BrandsController::class)->except([
        'create', 'edit',
    ]);

    Route::resource('/colors', ColorsController::class)->except([
        'create', 'edit',
    ]);

    Route::resource('/intends', IntendsController::class)->except([
        'create', 'edit',
    ]);

    Route::resource('/stocks', StocksController::class)->except([
        'create', 'edit',
    ]);

    Route::resource('/sizes', SizesController::class)->except([
        'create', 'edit',
    ]);

    Route::resource('/waterproofs', WaterproofsController::class)->except([
        'create', 'edit',
    ]);

    Route::resource('/pages', PagesController::class)->except([
        'create', 'edit',
    ]);

    Route::resource('/everythings', EverythingsController::class)->except([
        'create', 'edit',
    ]);

    Route::resource('/articles', ArticlesController::class)->except([
        'create', 'edit',
    ]);

    Route::resource('/blogs', BlogsController::class)->except([
        'create', 'edit',
    ]);

    Route::resource('/faqs', FaqsController::class)->except([
        'create', 'edit',
    ]);

    Route::resource('/products', ProductsController::class)->except([
        'create', 'edit',
    ]);

    Route::get('/catalog', [CatalogController::class, 'index'])->name('catalogs.index');

});


require __DIR__.'/auth.php';
