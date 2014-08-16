/**
 * bundleLogger
 *   - Provides gulp style logs to the bundle method in browserify.js
 */

var gutil = require('gulp-util');
var prettyHrtime = require('pretty-hrtime');
var startTime;

module.exports = {
  start: function() {
    startTime = process.hrtime();
    // gutil.log('Running', gutil.colors.green("'bundle'") + '...');
  },

  update: function(e) {
    startTime = process.hrtime();

    var diff = e.toString().replace(process.cwd(), '');

    gutil.log(gutil.colors.yellow('Modified:'), gutil.colors.yellow(diff), 'Re-bundling js ...');
  },

  finish: function() {
    var taskTime = process.hrtime(startTime);
    var prettyTime = prettyHrtime(taskTime);
    gutil.log(gutil.colors.green("Browserified"), 'in', gutil.colors.magenta(prettyTime));
  },

  end: function() {
    var taskTime = process.hrtime(startTime);
    var prettyTime = prettyHrtime(taskTime);
    gutil.log('Finished', gutil.colors.green("'bundle'"), 'in', gutil.colors.magenta(prettyTime));
  }
};