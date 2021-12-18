const gulp = require('gulp');
const fileInclud = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const webpHtml = require('gulp-webp-html');

function htmlFile() {
    return gulp.src('src/html/index.html')
    .pipe(fileInclud())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(webpHtml())
    .pipe(gulp.dest('dist'))
}


exports.html = htmlFile;