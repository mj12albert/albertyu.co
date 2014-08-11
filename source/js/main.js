// FastClick
window.addEventListener('load', function() {
  FastClick.attach(document.body);
  window.viewportUnitsBuggyfill.init();
}, false);

domready(function () {
  // console.log("dom is loaded!");
}) // Close domready()