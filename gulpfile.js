var gulp    = require('gulp');
var jade    = require('gulp-jade');
var nodemon = require('gulp-nodemon');
var concat  = require('gulp-concat');

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

gulp.task('watch', ['jade'], function () {
  gulp.watch('./template/**/*.jade', ['jade']);
});

gulp.task('default', ['jade', 'watch', 'nodemon']);