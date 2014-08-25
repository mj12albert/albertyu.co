var fastclick = require('./modules/fastclick.js');
var viewports = require('./modules/viewport-units-buggyfill.js');
var domready = require('./modules/ready.js');
var picturefill = require('./modules/picturefill.js');
var smoothScroll = require('./modules/smooth-scroll.js');
var classie = require('./modules/classie.js');
var style = document.documentElement.style;

/*domready(function() {
  console.log("ready!!!");

  viewports.init();

  fastclick(document.body);

  // smoothScroll.init();

})

window.addEventListener('load', function load(e) {
  // console.log(e);

  window.removeEventListener('load', load, false);

  classie.remove(document.documentElement, 'loading');

  smoothScroll.init();
})*/

viewports.init();
fastclick(document.body);
smoothScroll.init();

window.addEventListener('load', function load(e) {
  window.removeEventListener('load', load, false);
  classie.remove(document.documentElement, 'loading');
  classie.add(document.documentElement, 'loaded')
})

if ('-ms-scroll-limit' in style || 'behavior' in style) {
  // IE needs domready for overlay.js to init correctly
  domready(function() {
    require('./modules/overlay.js');
  })
} else {
  // browserify's require() works just fine on other browsers
  require('./modules/overlay.js');
}