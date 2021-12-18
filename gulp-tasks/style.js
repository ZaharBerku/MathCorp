const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const purgecss = require('gulp-purgecss');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const webpCss = require('gulp-webpcss');


function distStyles() {
  return gulp.src('src/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(purgecss({
      content: ['src/html/*.html']
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(webpCss({}))
    .pipe(gulp.dest('dist/css'))
};


exports.readyStyles = distStyles;