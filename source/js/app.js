/**
 * Plugins/Modules
 */

var fastclick = require('./modules/fastclick.js');
var viewports = require('./modules/viewport-units-buggyfill.js');
var domready = require('./modules/ready.js');
// var classie = require('./modules/classie.js');
var smoothScroll = require('./modules/smooth-scroll.commonJS.js');

/**
 * Helper functions
 */

// require('./functions/getElementsByClass.js');
// require('./functions/insertAfter.js');

domready(function() {
  console.log("ready!!!");

  viewports.init();

  fastclick(document.body);

  smoothScroll.init();

  require('./overlay.commonJS.js');
})