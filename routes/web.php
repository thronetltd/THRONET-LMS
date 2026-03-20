<?php

use Illuminate\Support\Facades\Route;

// Home page
Route::get('/', function () {
    return view('home');
});

// Authentication Routes
Auth::routes();

// Dashboard page (requires authentication)
Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware('auth');

// User-facing pages
Route::get('/about', function () {
    return view('about');
});

Route::get('/contact', function () {
    return view('contact');
});

Route::get('/services', function () {
    return view('services');
});

// Add more user-facing pages with routes as needed...
