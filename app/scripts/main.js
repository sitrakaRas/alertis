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
	  	if ($(window).outerWidth() > 1024) {
			console.log('on');
			$('.nav li.dropdown').on('mouseenter', function() {
			  	$(this).addClass('open');
			});
			$('.nav li.dropdown').on('mouseleave', function() {
			  	$(this).removeClass('open');
			});
		} else {
			console.log('off');
			$('.nav li.dropdown').off('mouseenter mouseleave');
		}
	});
	$(window).trigger('resize');

});