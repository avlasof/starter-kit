'use strict';

const config = require('./gulpconfig'),
    browserSync = require('browser-sync'),
    // git = require('gulp-git'),
    gulp = require('gulp');

require('./gulp/styles');
require('./gulp/templates');
require('./gulp/images');
require('./gulp/webpack');

gulp.task('serve', ['build'], function() {
    browserSync.init({
        server: config.dist
    });

    gulp.watch(config.app + '/**/*.js', ['webpack:dev']);
    gulp.watch(config.app + '/**/*.scss', ['styles']);
    gulp.watch(config.app + '/**/*.jade', ['jade']);
    gulp.watch(config.app + '/images/**/*.{png,jpg,gif,svg}', ['images']);
    gulp.watch(config.dist + '/*.js').on('change', browserSync.reload);
});

gulp.task('build', ['styles', 'jade', 'images', 'webpack:prod'], function() {
    // gulp.task('build', ['styles', 'scripts', 'templates', 'images'], function() {
    // return gulp.src('./assets/*')
    //     .pipe(git.commit('Markup #1'));
});

gulp.task('default', ['serve']);
