var gulp = require('gulp');
var argv = require('yargs').argv;
var gutil = require('gulp-util');
var assetPipe = require('../util/assetPipe');
var logger = require('../util/logger');

argv.production
  ? gulp.task('assets', ['clean', 'jekyll', 'sass', 'bundleScripts'], function(){ buildAssetsDir() })
  : gulp.task('assets', function() {
      console.log("dev mode, assets does nothing");
    })

var buildAssetsDir = function() {
  return gulp.src(['source/assets/**', '!source/assets/svg', '!source/assets/**/*.svg'])
    .pipe(gulp.dest('deploy/assets'))
    .pipe(assetPipe());
}