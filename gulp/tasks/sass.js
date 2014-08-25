var gulp = require('gulp');
var gutil = require('gulp-util');
var argv = require('yargs').argv;
var sass = require('gulp-ruby-sass');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var tallyWeight = require('../util/tallyWeight');
var rimraf = require('gulp-rimraf');
var logger = require('../util/logger');

/*gulp.task('sass', ['clean'], function() {
  !argv.production
    ? sassWatch()
    : sassBuild()
})*/

!argv.production
  // ? gulp.task('sass', function(){ sassWatch() })
  ? gulp.task('sass', function(){ console.log("bcw directly") })
  : gulp.task('sass', ['clean'], function(){ sassBuild() })

var sassWatch = function() {
  gulp.src('source/sass/**/*.{scss,sass}')
    .pipe(sass({
      bundleExec: true,
      compass: true,
      sourcemap: true,
      sourcemapPath: '../sass',
      require: ['breakpoint']
    }))
    .on('error', function(err) {
      logger.sassError(err);
    })
    .pipe(gulp.dest('./source/css'));

  gulp.watch('source/sass/**/*.{scss,sass}', ['sass'])
    .on('change', function(e) {
      logger.sassModified(e);
    });
}

var sassBuild = function() {
  return gulp.src('./source/sass/*.scss')
    .pipe(sass({
      bundleExec: true,
      compass: true,
      sourcemap: false,
      sourcemapPath: '../sass',
      require: ['breakpoint']
    }))
    .on('error', function(err) {
      logger.sassError(err);
    })
    // .pipe(rename("albertyu.css"))
    .pipe(minifycss({ keepSpecialComments: 0 }))
    .pipe(gulp.dest('./deploy/css'))
    .on('end', function() {
      // sourcemap: false isn't working, so manually delete .map from deploy dir
      gulp.src('./deploy/css/*.css.map')
        .pipe(rimraf());
    });
}