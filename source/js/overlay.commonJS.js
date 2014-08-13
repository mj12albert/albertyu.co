/**
 * Plugins
 */

require('browsernizr/test/css/transitions');
require('browsernizr/test/touchevents');
require('browsernizr/lib/load');
require('browsernizr/lib/prefixed');
require('browsernizr/lib/setClasses');

var Modernizr = require('browsernizr');
var classie = require('./modules/classie.js');

module.exports = (function() {
	var container = document.querySelector('div.container');
	var	triggerBttns = (!document.getElementsByClassName)
    ? document.querySelectorAll('trigger-overlay')
    : document.getElementsByClassName('trigger-overlay');
	var overlay = document.querySelector('div.overlay');
	var contactLinks = (!document.getElementsByClassName)
    ? document.querySelectorAll('contact-link')
    : document.getElementsByClassName('contact-link');
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

	// console.log(triggerBttns);
	// console.log(contactLinks);

	function toggleOverlay(e) {
		e.preventDefault();

		if(classie.has(overlay, 'open')) {
			classie.remove(overlay, 'open');
			classie.remove(overlay, 'dark');
			classie.remove(overlay, 'light');
			classie.remove(container, 'overlay-open');
			classie.remove(container, 'top');
			classie.remove(container, 'bottom');
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

			if (classie.has(e.srcElement, 'top')) {
				classie.add(container, 'top');
				classie.add(overlay, 'dark');
			} else {
				classie.add(container, 'bottom');
				classie.add(overlay, 'light');
			}
		}
	}

	// Loop through all triggers in the DOM and bind a click listener
	for (var i = 0, len = triggerBttns.length; i < len; i++) {
		triggerBttns[i].addEventListener('click', toggleOverlay)
	}

	closeBttn.addEventListener('click', toggleOverlay);

	// Close the overlay by clicking anywhere on it
	overlay.addEventListener('click', toggleOverlay);

	// Stop clicks on contact links from bubbling up to the overlay
	for (var i = 0, len = contactLinks.length; i < len; i++) {
		contactLinks[i].addEventListener('click', function(e) {
			e.stopPropagation();
		})
	}
})();