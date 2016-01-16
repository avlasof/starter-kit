'use strict';

const config = require('../gulpconfig'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    cssBase64 = require('gulp-css-base64'),
    cssnano = require('gulp-cssnano'),
    gutil = require('gulp-util'),
    gulp = require('gulp'),
    header = require('gulp-header'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    assets = require('postcss-assets');

function gulpTask(src, dist, autoprefixerBrowsers) {
    gulp.src(config.app + src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', function(err) {
            gutil.log(gutil.colors.red(err.message));
            gutil.beep();
            this.emit('end');
        }))
        .pipe(postcss([assets({
            loadPaths: ['../public/images']
        })]).on('error', function(err) {
            gutil.log(gutil.colors.red(err.message));
            gutil.beep();
            this.emit('end');
        }))
        .pipe(autoprefixer({
            browsers: autoprefixerBrowsers,
        }))
        .pipe(cssBase64({
            baseDir: '../public/images'
        }))
        .pipe(cssnano())
        .pipe(header(config.banner))
        .pipe(concat(dist))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.dist))
        .pipe(browserSync.stream({
            match: '**/*.css'
        }));
}

gulp.task('sass', function() {
    gulpTask('/common.scss', 'desktop.bundle.css', ['last 2 version', 'safari 6', 'ie 8', 'ie 9', 'opera 12.1']);
    gulpTask('/common-mobile.scss', 'mobile.bundle.css', ['last 2 version', 'safari 6', 'ios 6', 'android 4']);
});

gulp.task('styles', ['sass']);
