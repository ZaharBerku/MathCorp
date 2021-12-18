const gulp = require('gulp');
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');


function fontFile() {
    return gulp.src('src/font/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}')
    .pipe(fonter({
        formats: ['ttf','woff','eot','eot']
    }))
    .pipe(gulp.dest('dist/font'))
    .pipe(ttf2woff2())
    .pipe(gulp.dest('dist/font'))
}


exports.font = fontFile;