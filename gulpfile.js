const gulp = require('gulp');
const browserSync = require('browser-sync').create();
// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});


var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
 
gulp.task('mincss', function () {
    gulp.src('css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('mincss'));
});