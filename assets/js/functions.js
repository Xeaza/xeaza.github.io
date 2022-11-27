

var registerPlugins = function () {
	gsap.registerPlugin(ScrollToPlugin);
};

registerPlugins();

/***************** Splashscreen ******************/

$(window).on('load', function () {
	
	$('.splashscreen').addClass('splashscreen--is-hidden');
	
	setTimeout(function() {
		$('.splashscreen').css( {'display': 'none'} );
		
		var $name = $('.introduction__content-el--name'),
			$job = $('.introduction__content-el--job');

		// This line 
		//gsap.to([$name, $job], 0.8, {x: 0, opacity: 1, ease: "power2.out"});
 		// casued these warnings:
		//[Warning] Invalid property – "x" – "set to" – 0 – "Missing plugin? gsap.registerPlugin()" (gsap.min.js, line 10)
		//[Warning] Invalid property – "opacity" – "set to" – 1 – "Missing plugin? gsap.registerPlugin()" (gsap.min.js, line 10)
		//[Warning] Invalid property – "x" – "set to" – 0 – "Missing plugin? gsap.registerPlugin()" (gsap.min.js, line 10)
		//[Warning] Invalid property – "opacity" – "set to" – 1 – "Missing plugin? gsap.registerPlugin()" (gsap.min.js, line 10)
	}, 800);
	
});

$(document).ready(function() {
	

/***************** Responsive Nav ******************/

$('.navigation__burger').click(function() {
	
	navigationToggle();
	
});

function navigationToggle() {
	
	$('.navigation__burger').toggleClass('navigation__burger--is-open');
	$('.navigation__container').toggleClass('navigation__container--is-open');
	$('html, body').toggleClass('scroll-lock');
	
}

/***************** Smooth Scroll ******************/

$('a[href*="#"]:not([href="#0"])').click(function(ev) {
	
	ev.preventDefault();
		
		if ($('.navigation__container').hasClass('navigation__container--is-open')) {
			navigationToggle();
		}
			
		var target = $(this).attr('href');
		
		gsap.to(window, 1, { 
			scrollTo: {
				y: target,
				offsetY: 75, // this offset is the height of .navigation in _navigation.sass
				snap: 0 // still working on this - why it snap when 0? TODO:
			},
			ease: "power3.out"
		});
		
	});
});
