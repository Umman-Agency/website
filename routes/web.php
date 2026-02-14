<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::prefix('dashboard')->group(function (){

  Route::get('/', function (){
    return Inertia::render('dashboard');
  });

  Route::get('/profile-creation', function () {
    return Inertia::render('yourself');
  });
});
