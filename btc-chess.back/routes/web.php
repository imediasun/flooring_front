<?php

use App\Http\Controllers\GameController;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TestController;
use Illuminate\Foundation\Application;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AppointmentController;

Route::post('/appointments', [AppointmentController::class, 'submit'])->name('appointments.submit');


Route::get('/', [IndexController::class, 'index'])->name('index');
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

require __DIR__.'/auth.php';
