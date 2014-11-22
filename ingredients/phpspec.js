var elixir = require('laravel-elixir');
var _ = require('underscore');
var gulpTester = require('./helpers/GulpTester');

/*
 |----------------------------------------------------------------
 | PHPSpec Testing
 |----------------------------------------------------------------
 |
 | This task will trigger your entire PHPSpec test suite and it
 | will show notifications indicating the success or failure
 | of that test suite. It's works great with the tdd task.
 |
 */

elixir.extend('phpSpec', function(src, options) {

    options = _.extend({ verbose: 'v', notify: true }, options);

    return gulpTester({
        framework: 'PHPSpec',
        pluginName: 'phpspec',
        pluginOptions: options,
        src: src || 'spec/**/*Spec.php'
    });

});