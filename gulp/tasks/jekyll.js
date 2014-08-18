var gulp = require('gulp');
var exec = require('child_process').exec;
var gutil = require('gulp-util');
var argv = require('yargs').argv;
var processhtml = require('gulp-processhtml');
var cleanhtml = require('gulp-cleanhtml');
var replace = require('gulp-replace');
var logger = require('../util/logger');

gulp.task('jekyll', ['clean'], function() {
  !argv.production
    ? jekyllWatch()
    : jekyllBuild()
})

var jekyllWatch = function() {
  exec('cd source && bundle exec jekyll build --watch')

  gulp.watch('source/**/*.html')
    .on('change', function(e) {
      logger.jekyllUpdate(e);
    });
}

var jekyllBuild = function() {
  exec('cd source && bundle exec jekyll build', function(err, stdout, stderr) {
    // console.log(stdout);
    return gulp.src(['build/index.html'])
      .pipe(processhtml('index.html'))
      .pipe(replace('manifest.css', 'albertyu.css'))
      .pipe(replace('browserified.js', 'albertyu.js'))
      .pipe(replace('dtg6nmd', 'mmu7zkr'))
      .pipe(replace('761324', '682504'))
      .pipe(cleanhtml())
      .pipe(gulp.dest('deploy'));
  })
}