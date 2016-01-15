'use strict';

const gulp = require('gulp'),
    gutil = require('gulp-util'),
    webpack = require('webpack'),
    webpackConfig = require('../webpack.config.js');

function webpackCompile(env, callback) {
    webpack(webpackConfig(env), function(err, stats) {
        if(stats.compilation.errors.length) gutil.beep();
        if(err) throw new gutil.PluginError('Webpack', err);
        gutil.log('Webpack', stats.toString({colors: true}));
        callback();
    });
}

gulp.task('webpack:dev', function(callback) {
    webpackCompile('development', callback);
});

gulp.task('webpack:prod', function(callback) {
    webpackCompile('production', callback);
});