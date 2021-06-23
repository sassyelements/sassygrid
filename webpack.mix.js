let mix = require('laravel-mix');

mix.setPublicPath('dist');
mix.sass('src/sassygrid.scss', 'dist/sassygrid.css');
