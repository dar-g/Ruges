'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./source/sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/assets/css/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./source/sass/*.scss', ['sass']);
});
