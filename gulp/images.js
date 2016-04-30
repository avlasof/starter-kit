'use strict';

const config = require('../gulpconfig'),
    changed = require('gulp-changed'),
    gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    imageResize = require('gulp-image-resize'),
    svg2png = require('gulp-svg2png');

function gulpTask(src, dist, task) {
    const imageminOptions = {
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        },
        imageResizeOptions = {
            width: '50%',
            height: '50%',
            imageMagick: true
        };

    if (task === 'resize') {
        gulp.src(src)
            .pipe(changed(config.dist + '/images/' + dist))
            .pipe(imageResize(imageResizeOptions))
            .pipe(imagemin(imageminOptions))
            .pipe(gulp.dest(config.dist + '/images/' + dist));
    } else if (task === 'svg2png') {
        gulp.src(src)
            .pipe(changed(config.dist + '/images/' + dist))
            .pipe(imagemin(imageminOptions))
            .pipe(svg2png())
            .pipe(gulp.dest(config.dist + '/images/' + dist));
    } else {
        gulp.src(src)
            .pipe(changed(config.dist + '/images/' + dist))
            .pipe(imagemin(imageminOptions))
            .pipe(gulp.dest(config.dist + '/images/' + dist));
    }

}

gulp.task('imagemin', function() {
    gulpTask([config.app + '/images/**/*.{png,jpg,gif}'], '2x');
    gulpTask([config.app + '/**/*.{png,jpg,gif}', '!' + config.app + '/images/**/*'], '2x');
});

gulp.task('imageResize', function() {
    gulpTask([config.app + '/images/**/*.{png,jpg,gif}'], '1x', 'resize');
    gulpTask([config.app + '/**/*.{png,jpg,gif}', '!' + config.app + '/images/**/*'], '1x', 'resize');
});

gulp.task('imageSVG', function() {
    gulpTask([config.app + '/images/**/*.svg'], 'svg');
    gulpTask([config.app + '/**/*.svg', '!' + config.app + '/images/**/*'], 'svg');
    gulpTask([config.app + '/images/**/*.svg'], 'svg', 'svg2png');
    gulpTask([config.app + '/**/*.svg', '!' + config.app + '/images/**/*'], 'svg', 'svg2png');
});

gulp.task('images', ['imagemin', 'imageResize', 'imageSVG']);
