var ww = $(window).width();

$(document).ready(function() {
// Show and hide the line menu that shows up when the site is on mobile
	$("#lineMenu").click(function(e) {
		e.preventDefault();
		$('#hiddingMenu').toggleClass("active");
		$('#hiddingMenu').toggle();
	});
	adjustMenu();
});

$(window).bind('resize orientationchange', function() {
    ww = document.body.clientWidth;
    adjustMenu();
});

// function that shows and hides the css classes that drop down the line menu on mobile
var adjustMenu = function() {
	if (ww < 702) {
		//$("#hiddingMenu").css("display", "inherit");
		if (!$("#hiddingMenu").hasClass("active")) {
			$('#hiddingMenu').hide();
		} else {
			$('#hiddingMenu').show();
		}
	} 
	else if (ww >= 702) {
		$("#hiddingMenu").css("display", "inherit");
		$('#hiddingMenu').show();
	}
}