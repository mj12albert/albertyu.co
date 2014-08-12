var gulp = require('gulp');
var gutil = require('gulp-util');
var rimraf = require('gulp-rimraf');
var merge = require('merge-stream');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var cleanhtml = require('gulp-cleanhtml');
var processhtml = require('gulp-processhtml');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
// gulp-strip-debug throws an error if input has nothing to strip
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');

gulp.task('pre-clean', function() {
  return gulp.src(['deploy/*'], { read: false })
    .pipe(rimraf());
});

// Process & Minify HTML
gulp.task('html', function() {
  gulp.src(['build/index.html'])
    .pipe(processhtml('index.html'))
    .pipe(replace('manifest.css', 'albertyu.css'))
    .pipe(replace('main.js', 'albertyu.js'))
    .pipe(replace('dtg6nmd', 'mmu7zkr'))
    .pipe(replace('761324', '682504'))
    .pipe(cleanhtml())
    .pipe(gulp.dest('deploy'));
})

// Minify CSS
gulp.task('css', function() {
  return gulp.src(['build/css/*.css'])
    .pipe(rename("albertyu.css"))
    .pipe(minifycss({ keepSpecialComments: 0 }))
    .pipe(gulp.dest('deploy/css'));
})

// Modernizr
gulp.task('modernizr', function() {
  return gulp.src(['build/js/vendor/modernizr.custom.60996.js'])
    .pipe(rename("modernizr.js" ))
    .pipe(uglify())
    .pipe(gulp.dest('deploy/js'));
})

// Picturefill
gulp.task('picturefill', function() {
  return gulp.src(['build/js/picturefill.js'])
    .pipe(rename({ suffix: ".min" }))
    .pipe(uglify({ mangle: true }))
    .pipe(gulp.dest('deploy/js'));
})

// Concat & Minify JS
gulp.task('mainjs', function() {
  return gulp.src([
    'build/js/build-main/*.js',
    'build/js/main.js'
  ])
    .pipe(stripDebug())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('deploy/tmp'));
})

gulp.task('overlayjs', function() {
  return gulp.src(['build/js/overlay.js'])
    .pipe(uglify())
    .pipe(gulp.dest('deploy/tmp'));
})

gulp.task('js', ['mainjs', 'overlayjs'], function() {
  return gulp.src(['deploy/tmp/*.js'])
    .pipe(concat('albertyu.js'))
    .pipe(gulp.dest('deploy/js'));
})

// Build assets folder
gulp.task('assets', function() {
  gulp.src(['build/assets/**', '!build/assets/svg{,/**}'])
    .pipe(gulp.dest('deploy/assets'));
});

// Clean tmp directory
gulp.task('post-clean', ['js'], function() {
  return gulp.src(['deploy/tmp'], { read: false })
    .pipe(rimraf());
})

// Build
gulp.task('default', ['pre-clean'], function() {
  gulp.start(
    'html',
    'css',
    'js',
    'modernizr',
    'picturefill',
    'assets',
    'post-clean'
  );
});