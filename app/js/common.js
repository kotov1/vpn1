$(function() {



$(".table-pricing").hover( function(){
	//$(this).css("position", 'relative')
	//$(".table-pricing").css("display","inline-block")
	$(".table-pricing").eq(1).removeClass('recomend');	
});


$(".table-pricing").mouseleave(function(){
	$(".table-pricing").eq(1).addClass('recomend');
});


	$('.menu-icon').on('click', function() {
		$(this).toggleClass("active");
		
		$('.nav').slideToggle(500, function(){
			if($(this).css('display')==='none'){
				$(this).removeAttr('style');
				}
		});
		
	});


	$('.owl-carousel').owlCarousel({
		loop:true,
		autoWidth:true,
		autoplay:true,
		autoplayTimeout: 1000,
		responsiveClass:true,
		responsive : {
			0: {
				items:1,
				margin:50
			},
			576: {
				items:5,
				margin:30
			}
		}
	});

	$(document).ready(function(){
		if($(window).width() < 576){
		    $(".owl-carousel").owlCarousel('destroy')
		}
		});


	// wow = new WOW(
	// 	{
	// 		boxClass:     'wow',      // default
	// 		animateClass: 'animated', // default
	// 		offset:       150,          // default
	// 		mobile:       true,       // default
	// 		live:         true        // default
	// 	}
	// )
	// wow.init();



});