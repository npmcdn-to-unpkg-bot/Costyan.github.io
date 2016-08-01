'use strict';

var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var minCSS = require('gulp-cssnano');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
  gulp.src(['src/sass/**/*.scss', '!src/sass/mixins.scss', '!src/sass/fonts.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});

gulp.task('cssMin', function() {
  gulp.src(['src/css/*.css', '!src/css/*.min.css'])
    .pipe(minCSS())
    .pipe(gulp.dest('src/css/'));
});

gulp.task('uglify', function() {
  gulp.src(['src/js/*js', '!src/js/*.min.js'])
    .pipe(uglify())
    .pipe(gulp.dest('src/js'))
});

gulp.task('clean', function() {
  del.sync('dist');
});

gulp.task('build', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist/'));
  gulp.src('src/css/main.css')
    .pipe(gulp.dest('dist/css/'));
  gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts/'));
  gulp.src('src/img/**/*')
    .pipe(gulp.dest('dist/img/'));
  gulp.src('src/js/main.js')
    .pipe(gulp.dest('dist/js/'))
});

gulp.task('watch', ['sass'], function () {
  gulp.watch('src/sass/**/*.scss', ['sass']);
});
