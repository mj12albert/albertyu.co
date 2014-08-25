var gulp = require('gulp');
var exec = require('child_process').exec;
var gutil = require('gulp-util');
var argv = require('yargs').argv;
var processhtml = require('gulp-processhtml');
var cleanhtml = require('gulp-cleanhtml');
// var rename = require('gulp-rename');
var replace = require('gulp-replace');
var smoosher = require('gulp-smoosher');
var logger = require('../util/logger');

/*gulp.task('jekyll', ['clean'], function() {
  !argv.production
    ? jekyllWatch()
    : ujekyllBuild();
})*/

!argv.production
  ? gulp.task('jekyll', ['clean'], function() {
      jekyllWatch()
    })
  : gulp.task('jekyll', ['clean', 'enhance'], function() {
      jekyllBuild();
    })

var jekyllWatch = function() {
  exec('cd source && bundle exec jekyll build --watch')

  gulp.watch('source/**/*.html')
    .on('change', function(e) {
      logger.jekyllUpdate(e);
    })
    .on('error', function(e) {
      console.log(e);
    });
}

var jekyllBuild = function() {
  exec('cd source && bundle exec jekyll build', function(err, stdout, stderr) {
    // console.log(stdout);
    return gulp.src(['build/index.html'])
      .pipe(processhtml('index.html'))
      .pipe(smoosher())
      // .pipe(replace('manifest.css', 'albertyu.css'))
      .pipe(replace('dist/browserified.js', 'albertyu.js'))
      .pipe(replace('dtg6nmd', 'mmu7zkr'))
      .pipe(replace('761324', '682504'))
      .pipe(cleanhtml())
      .pipe(gulp.dest('deploy'));
  });
}

