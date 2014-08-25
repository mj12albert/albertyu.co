var gulp = require('gulp');
// var runSequence = require('run-sequence');

gulp.task('default', ['jekyll', 'sass', 'bundleScripts', 'assets']);

// gulp.task('default', ['weight']);

// gulp.task('default', function() {
//   runSequence('clean', ['jekyll', 'sass', 'bundleScripts', 'assets'], 'weight');
// })