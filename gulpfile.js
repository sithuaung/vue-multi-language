const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

elixir((mix) => {
    /**
     * Compiling vuejs .vue files into one.
     */
    mix.webpack('app.js');

    /**
     * Compiling multiple css files into one.
     */
    mix.styles([
        '../../../node_modules/bootstrap/dist/css/bootstrap.css',
        'custom.css'
    ], 'public/css/all.css');

    /**
     * Compiling multiple js files into one.
     */
    mix.scripts([
        '../../../node_modules/jquery/dist/jquery.js',
        '../../../node_modules/bootstrap/dist/js/bootstrap.js'
    ], 'public/js/all.js');
});
