const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const distHtml = require("./gulp-tasks/html").html;
const distJsAll = require("./gulp-tasks/js").readyJs;
const delDistFolder = require("./gulp-tasks/delDist").delDist;
const distStylesAll = require("./gulp-tasks/style").readyStyles;
const distImgs = require("./gulp-tasks/img").imgReady;


function watchFiles() {

    browserSync.init({
        server: {
            baseDir: './dist'
        },
       notify:false
    })
  gulp.watch("src/", gulp.series(distHtml,distImgs,distJsAll,distStylesAll));
  gulp.watch("dist/",).on('change', browserSync.reload); 
  };

function devDist() {
    return gulp.series(delDistFolder,distImgs,distHtml,distJsAll,distStylesAll,watchFiles)
}


exports.default = devDist();