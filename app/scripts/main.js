var alertis = {
    slider: function(parent,arg){
        parent.slick(arg);
    }
}

$(document).ready(function() {
    if($(".slider-confiance").length > 0){
        var arg = {
            variableWidth: true

        }
        alertis.slider($(".slider-confiance"),arg);
    }

    $('.nav > li').find('.dropdown-menu').parent('li').addClass('dropdown');
	$( window ).on('resize', function() {
	  	if ($(window).width() >= 992) {
	  		$('.nav li.dropdown').hover(function() {
			  	$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
			}, function() {
			  	$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
			});
		}
	});
	$(window).trigger('resize');

});