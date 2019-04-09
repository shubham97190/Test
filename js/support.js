

//for mobile crousel//

$(document).ready(function() {

	//for menue
	$(".navbar-toggle").click(function() {
	$(this).toggleClass("collapsed");
	$("#mobile-menu").toggleClass("showme");	

});



//for crousel	

$('#center-crousel').owlCarousel({
	center: true,
	nav: true,
	items: 2,
	loop: true,
	margin: 157,
	responsive: {
	600: {
	items:2

}
}
})

$('#mobile-center-crousel').owlCarousel({
	center: false,
	nav: true,
	items: 1,
	loop: true,
	margin: 25,
	responsive: {
	600: {
	items:1

}
}
})

$('.mobile-crousel').owlCarousel({
	center: false,
	nav: true,
	items: 1,
	loop: true,
	margin: 25,
	responsive: {
	600: {
	items:1

}
}
})

$('.single-crousel').owlCarousel({
	center: false,
	nav: true,
	items: 1,
	loop: true,
	margin: 25,
	responsive: {
	600: {
	items:1

}
}
})


$('.user-crousel').owlCarousel({
	center: false,
	nav: false,
	items: 4,
	loop: false,
	margin: 25,
	responsive: {
	600: {
	items:4

}
}
})



$('.user-crousel-mobile').owlCarousel({
	center: true,
	nav: true,
	items: 1,
	loop: false,
	margin: 25,
	responsive: {
	600: {
	items:1

}
}
})


//for menu dropdown//


$('ul.nav li.dropdown').hover(function() {
$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(1);
}, function() {
$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(1);
});


//for scrolltop//

$('.ScrollTop').click(function() {$('html, body').animate({scrollTop: 0}, 200);
return false;});

//form-validation //

});



//for header fix//

$(function() {
	var header = $(".navbar");
	var _scrollheight = $(window).scrollTop();
	var _windowHeight = $(window).width();
	if(_scrollheight > 5 && _windowHeight >= 1200){
	header.removeClass('navbar').addClass("navbar-alt");
	}

$(window).scroll(function() {    
	var scroll = $(window).scrollTop();



if (scroll >= 100) {
	header.removeClass('navbar').addClass("navbar-alt");
	} else {
	header.removeClass("navbar-alt").addClass('navbar');
	}
});
});

//for header fix ends//


$(document).on('click', 'a[href^="#"].takeme-toposition', function(e) {
	// target element id
	var id = $(this).attr('href');

	// target element
	var $id = $(id);
	if ($id.length === 0) {
	return;	
}

// prevent standard hash navigation (avoid blinking in IE)
	e.preventDefault();

// top position relative to the document
	var pos = $id.offset().top;

// animated top scrolling
$('body, html').animate({scrollTop: pos});
});

