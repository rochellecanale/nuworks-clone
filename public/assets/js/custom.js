$(document).scroll(function () {
	var $nav = $(".navbar");
	$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	$(".navbar .navbar-brand").toggleClass('logo-show', $(this).scrollTop() < $nav.height());
});