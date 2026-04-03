<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('landing');
})->name('landing');

Route::get('/welcome', function (){
  return Inertia::render('welcome');
})->name('login');


Route::middleware('auth')->prefix('dashboard')->group(function (){

  Route::get('/', function (){
    // Put here the logging 
    return Inertia::render('dashboard');
  });

  // Route::get('/profile-creation', function () {
  //   return Inertia::render('yourself');
  // });
});
