const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const fileInclud = require('gulp-file-include');

function distJs() {
    return gulp.src('src/js/*.js')
    .pipe(rename({ suffix: '.min' }))
    .pipe(fileInclud())
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
}

exports.readyJs = distJs;