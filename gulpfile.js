var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var browserify = require('browserify');
var exec = require('child_process').exec;
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');

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

gulp.task('jekyll', function() {
  exec('cd source && bundle exec jekyll build', function(err, stdout, stderr) {
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
      require: ['breakpoint'],
      debugInfo: true
    }))
    .pipe(gulp.dest('./source/css'));
})

gulp.task('watch', function() {
  gulp.watch('source/**/*.html', ['jekyll']);
  gulp.watch('source/sass/**/*.{scss, sass}', ['sass']);
})

// gulp.task('default', ['clean', 'jekyll', 'sass', 'watch']);
gulp.task('default', ['clean'], function() {
  gulp.start(
    'jekyll',
    'sass',
    'watch'
  );
});