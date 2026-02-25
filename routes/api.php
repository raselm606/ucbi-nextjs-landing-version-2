<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ContactController;

Route::get('/ucbi_contact', [ContactController::class, 'index']);
Route::post('/ucbi_contact', [ContactController::class, 'Contactstore']);
Route::get('/ucbi_subscriber', [ContactController::class, 'ucSubscriber']);
Route::post('/ucbi_subscriber', [ContactController::class, 'Subscriberstore']);
