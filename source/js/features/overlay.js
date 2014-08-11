(function() {
	var container = document.querySelector('div.container');
	var	triggerBttns = (!document.getElementsByClassName)
    ? document.querySelectorAll('trigger-overlay')
    : document.getElementsByClassName('trigger-overlay');
	var overlay = document.querySelector('div.overlay');
	var	closeBttn = overlay.querySelector('button.overlay-close');
	var	transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		};
	var	transEndEventName = transEndEventNames[Modernizr.prefixed('transition')];
	var	support = {transitions: Modernizr.csstransitions};

	function toggleOverlay(e) {
		e.preventDefault();

		if(classie.has(overlay, 'open')) {
			classie.remove(overlay, 'open');
			classie.remove(container, 'overlay-open');
			classie.add(overlay, 'close');
			var onEndTransitionFn = function(e) {
				if(support.transitions) {
					if(e.propertyName !== 'visibility') return;
					this.removeEventListener(transEndEventName, onEndTransitionFn);
				}
				classie.remove( overlay, 'close' );
			};
			if(support.transitions) {
				overlay.addEventListener(transEndEventName, onEndTransitionFn);
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has(overlay, 'close')) {
			classie.add(overlay, 'open');
			classie.add(container, 'overlay-open');
		}
	}

	// Loop through all triggers in the DOM and bind a click listener
	for (var i = 0, len = triggerBttns.length; i < len; i++) {
		triggerBttns[i].addEventListener('click', toggleOverlay);
	}

	closeBttn.addEventListener('click', toggleOverlay);
})();