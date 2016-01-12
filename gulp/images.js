'use strict';

const config = require('../gulpconfig'),
    changed = require('gulp-changed'),
    gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    imageResize = require('gulp-image-resize');

function gulpTaskImagemin(src) {
    let imageminOptions = {
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        };

    gulp.src(src)
        .pipe(changed(config.dist + '/images/2x'))
        .pipe(imagemin(imageminOptions))
        .pipe(gulp.dest(config.dist + '/images/2x'));
}

function gulpTaskImageResize(src) {
    let imageminOptions = {
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        },
        imageResizeOptions = {
            width: '50%',
            height: '50%',
            imageMagick: true
        };

    gulp.src(src)
        .pipe(changed(config.dist + '/images/1x'))
        .pipe(imageResize(imageResizeOptions))
        .pipe(imagemin(imageminOptions))
        .pipe(gulp.dest(config.dist + '/images/1x'));
}

gulp.task('imagemin', function() {
    gulpTaskImagemin([config.app + '/images/**/*.{png,jpg,gif,svg}']);
    gulpTaskImagemin([config.app + '/**/*.{png,jpg,gif,svg}', '!' + config.app + '/images/**/*']);
});

gulp.task('imageresize', function() {
    gulpTaskImageResize([config.app + '/images/**/*.{png,jpg,gif,svg}']);
    gulpTaskImageResize([config.app + '/**/*.{png,jpg,gif,svg}', '!' + config.app + '/images/**/*']);
});

gulp.task('images', ['imagemin', 'imageresize']);
