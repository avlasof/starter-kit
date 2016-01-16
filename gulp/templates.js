'use strict';

const config = require('../gulpconfig'),
    browserSync = require('browser-sync'),
    gutil = require('gulp-util'),
    gulp = require('gulp'),
    jade = require('gulp-jade');

gulp.task('jade', function() {
    let jadeOptions = {
        doctype: 'html',
        pretty: true
    };

    return gulp.src(config.app + '/jade/*.jade')
        .pipe(jade(jadeOptions).on('error', function(err) {
            gutil.log(gutil.colors.red(err.message));
            gutil.beep();
            this.emit('end');
        }))
        .pipe(gulp.dest(config.dist))
        .pipe(browserSync.stream());
});

gulp.task('templates', ['jade']);
