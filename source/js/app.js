var fastclick = require('./modules/fastclick.js');
var viewports = require('./modules/viewport-units-buggyfill.js');
var domready = require('./modules/ready.js');
var picturefill = require('./modules/picturefill.js');
var smoothScroll = require('./modules/smooth-scroll.js');
require('./modules/overlay.js');

domready(function() {
  console.log("ready!!!");

  viewports.init();

  fastclick(document.body);

  smoothScroll.init();

  // ...

})