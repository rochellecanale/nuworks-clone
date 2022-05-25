$(document).scroll(function () {
	var $nav = $(".navbar");
	$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	$(".navbar .navbar-brand").toggleClass('logo-show', $(this).scrollTop() < $nav.height());
});

$("#open-nav").on("click", function () {
	$("#menu").addClass("open");
	$window = $(window);
	if ($window.width() < 1024) {
		$("body").css('overflow', 'hidden');
	}
})

$("#close-nav").on("click", function () {
	$("#menu").removeClass("open");
	if ($window.width() < 1024) {
		$("body").css('overflow', 'unset');
	}
})