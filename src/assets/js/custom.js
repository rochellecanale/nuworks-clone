$(document).scroll(function () {
	var $nav = $(".navbar");
	$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	$(".navbar .navbar-brand").toggleClass('logo-show', $(this).scrollTop() < $nav.height());
});

$("#close-nav").on("click", function () {
	$("#menu").removeClass("open");
	if ($window.width() < 1024) {
		$("body").css('overflow', 'unset');
	}
})