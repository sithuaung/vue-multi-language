<?php

// Instead of laravel routes, will use vue routes.
Route::get('{vue_capture?}', function() {
    return View::make('welcome');
})->where('vue_capture', '[\/\w\.-]*');
