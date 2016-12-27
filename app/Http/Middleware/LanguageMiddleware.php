<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\App;

class LanguageMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $locale = $request->segments()[1];
        $supported_locales = config('translatable.locales');
        $fallback_locale = config('translatable.fallback_locale');

        if(in_array($locale, $supported_locales)){
            // set requsted locale.
            App::setLocale($locale);
        } 

        return $next($request);
    }
}
