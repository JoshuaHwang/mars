var gulp    = require('gulp');
var jade    = require('gulp-jade');
var sass    = require('gulp-sass');
var nodemon = require('gulp-nodemon');

var app = 'app/app.js';

gulp.task('nodemon', function() {
  nodemon({
    script: app,
  }).on('start');
});

gulp.task('jade', function() {
  console.log('Running jade...');
  gulp.src('./template/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./app/views'))
});

gulp.task('sass', function() {
  console.log('Running sass...');
  gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/public/css'))
});

gulp.task('watch', ['jade', 'sass'], function () {
  gulp.watch('./template/**/*.jade', ['jade']);
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('default', ['jade', 'sass', 'watch', 'nodemon']);