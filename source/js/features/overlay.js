domready(function() {
  var overlay = document.getElementById('overlay');
  var openOverlay = document.getElementById('open-overlay');
  var closeOverlay = document.getElementById('close-overlay');

  // console.log(closeOverlay);

  openOverlay.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("open overlay");

    overlay.classList.add('open');
  })

  closeOverlay.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("close overlay");

    overlay.classList.remove('open');
  })
})