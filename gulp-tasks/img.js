const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const webp = require('gulp-webp');


function distImg() {
    return gulp.src('src/img/**/**')
        .pipe(
            webp({
               quality:70
            })
        )
        .pipe(gulp.dest('dist/img'))
        .pipe(gulp.src('src/img/**/**'))
        .pipe(newer('dist/img'))
        .pipe(imagemin({
            verbose: true
        }))
        .pipe(gulp.dest('dist/img'))
}

exports.imgReady = distImg;