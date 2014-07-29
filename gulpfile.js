var gulp = require('gulp');
var gutil = require('gulp-util');
var rimraf = require('gulp-rimraf');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var processhtml = require('gulp-processhtml');
var minifyhtml = require('gulp-minify-html');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
// gulp-strip-debug throws an error if input has nothing to strip
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');

gulp.task('clean', function() {
  return gulp.src(['deploy/*'], { read: false })
    .pipe(rimraf());
});

// Process & Minify HTML
gulp.task('html', function() {
  gulp.src(['build/index.html'])
    .pipe(processhtml('index.html'))
    .pipe(replace('dtg6nmd', 'mmu7zkr'))
    .pipe(replace('761324', '682504'))
    /*.pipe(minifyhtml({
      conditionals: true
    }))*/
    .pipe(gulp.dest('deploy'));
})

// Minify CSS
gulp.task('css', function() {
  return gulp.src(['build/css/*'])
    .pipe(rename("albertyu.css"))
    .pipe(minifycss({ keepSpecialComments: 0 }))
    .pipe(gulp.dest('deploy/css'));
})

// Concat & Minify JS
gulp.task('js', function() {
  return gulp.src([
    'build/js/vendor/*.js',
    '!build/js/vendor/picturefill.js',
    'build/js/main.js'
  ])
    .pipe(stripDebug())
    .pipe(concat('albertyu.js'))
    .pipe(uglify())
    .pipe(gulp.dest('deploy/js'));
})

// Picturefill
gulp.task('picturefill', function() {
  return gulp.src(['build/js/vendor/picturefill.js'])
    .pipe(rename({ suffix: ".min" }))
    .pipe(uglify({ mangle: true }))
    .pipe(gulp.dest('deploy/js'));
})

// Build assets folder
gulp.task('assets', function() {
  gulp.src(['build/assets/**'])
    .pipe(gulp.dest('deploy/assets'));
});

// Misc root level files

// Build
gulp.task('default', ['clean'], function() {
  gulp.start(
    'html',
    'css',
    'js',
    'picturefill',
    'assets'
  );
});