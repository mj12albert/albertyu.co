var gulp = require('gulp');
var gutil = require('gulp-util');
var rimraf = require('gulp-rimraf');
var browserify = require('browserify');
var watchify = require('watchify');
var exec = require('child_process').exec;
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');
var compass = require('gulp-compass');
var bundleLogger = require('./gulp/util/bundleLogger');
var transform = require('vinyl-transform');
var exorcist = require('exorcist');
var streamify = require('gulp-streamify');

gulp.task('clean', function() {
  return gulp.src(['./build/*'], {read: false})
    .pipe(rimraf());
})

gulp.task('browserify', function() {
  return browserify('./source/js/app.js')
    .bundle()
    .pipe(source('browserified.js'))
    .pipe(gulp.dest('./source/js'));
})

gulp.task('js', ['browserify'], function() {
  return gulp.src(['./source/js/browserified.js'])
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest('./source/js'));
})

gulp.task('watchify', function() {
  function browserifyShare(){
    var b = browserify({
      cache: {},
      packageCache: {},
      fullPaths: true,
      debug: true
    });

    b = watchify(b);

    b.on('update', function(e){
      bundleLogger.update(e);
      bundleShare(b);
    });

    b.add('./source/js/app.js');
    bundleShare(b);
  }

  function bundleShare(b) {
    bundleLogger.start();
    b.bundle()
      .pipe(source('browserified.js'))
      .pipe(transform(function() {
        return exorcist('./source/js/browserified.map');
      }))
      // .pipe(streamify(stripDebug()))
      // .pipe(streamify(uglify()))
      .pipe(gulp.dest('./source/js/'))
      .on('end', bundleLogger.finish);
  }

  browserifyShare();
})

gulp.task('jekyll', function() {
  exec('cd source && bundle exec jekyll build --watch', function(err, stdout, stderr) {
    console.log(stdout);
  })
})

gulp.task('sass', function() {
  return gulp.src('source/sass/**/*.{scss, sass}')
    .pipe(sass({
      bundleExec: true,
      compass: true,
      sourcemap: true,
      sourcemapPath: '../sass',
      require: ['breakpoint']
    }))
    .on('error', function(e) {
      var file = e.message.slice(6).slice(0, e.message.slice(6).indexOf('('));
      var message = e.message.slice(e.message.indexOf('('), e.message.length);

      gutil.log(gutil.colors.red("error"), gutil.colors.red(file), message);
    })
    .pipe(gulp.dest('./source/css'));
})

gulp.task('compass', function() {
  return gulp.src('source/sass/**/*.{scss, sass}')
    .pipe(compass({
      css: 'source/css',
      sass: 'source/sass',
      bundle_exec: true,
      sourcemap: true,
      require: ['breakpoint']
    }))
    .on('error', function(err) {
      console.log(err);
    });
})

gulp.task('watch', function() {
  // gulp.watch('source/**/*.html', ['jekyll']);
  gulp.watch('source/sass/**/*.{scss, sass}', ['sass'])
    .on('change', function(e) {
      gutil.log(gutil.colors.yellow("modified", e.path.replace(process.cwd(), '')));
    });
})

gulp.task('default', ['clean'], function() {
  gulp.start(
    'jekyll',
    'sass',
    'watchify',
    'watch'
  );
});