var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');

gulp.task('browserify', function() {
  return browserify('./source/js/app.js')
    .bundle()
    .pipe(source('browserified.js'))
    .pipe(gulp.dest('./source/js'));
})

gulp.task('default', ['browserify'], function() {
  return gulp.src(['./source/js/browserified.js'])
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest('./source/js'));
})