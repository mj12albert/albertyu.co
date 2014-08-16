var gulp = require('gulp');
var argv = require('yargs').argv;
var rimraf = require('gulp-rimraf');
var dir; // Name of the directory to be scrubbed by rimraf()

gulp.task('clean', function() {
  !argv.production
    ? dir = 'build'
    : dir = 'deploy'

  return gulp.src(['./'+dir+'/*'], {read: false}).pipe(rimraf())
})