var alertis = {
    slider: function(parent,arg){
        parent.slick(arg);
    },
	topSlider: function(parent){
		var active = parent.find('.control .active').data('href');
		$('.slider-ctnr .items .item').removeClass('active');
		$(active).addClass('active');

		parent.find('.control a').on('click', function(e){
			e.preventDefault();
			active = $(this).data('href');
			$('.slider-ctnr .items .item').removeClass('active');
			parent.find('.control a').removeClass('active');
			$(this).addClass('active');
			$(active).addClass('active');

		});
	}
}

$(document).ready(function() {
	

	function displayChart(elem, displayText) {
		var options = {
			cutoutPercentage : 70,
			responsive: true,
		    legend: {
		      	display: false
		    },
		    tooltips: {
		      	enabled: false
		    }
		}
	    var data1 = {
		    datasets: [{
		        data: [displayText, 100-displayText],
		        backgroundColor: [ "#e94e1b", "#c6c6c6" ],
		        borderWidth: [0, 0]
		    }],
		    labels: ['blue', 'red']
		};

		var chart = new Chart($(elem), {
			type: 'doughnut',
			data: data1,
			options: options
		});
	}

	displayChart('#chart1', '40');
	displayChart('#chart2', '60');

    if($('.slider-confiance').length > 0){
        var arg = {
            variableWidth: true

        }
        alertis.slider($('.slider-confiance'),arg);
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

	//topSlider
	if($('#slider-top').length > 0){
		alertis.topSlider($('#slider-top'));
	}
	//slider-formation
	if($('.slider-formation').length > 0){
		var arg = {
			 slidesToShow: 1,
			 dots : true,
			 arrows : true,
			 responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false,
					}
				}
			]
		};

		alertis.slider($('.slider-formation'), arg);
	}
});