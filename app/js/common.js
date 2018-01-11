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

});




ymaps.ready(init);
	function init() {
	ymaps.geolocation.get({provider:"yandex"})
	.then(function (res)  {
		var g = res.geoObjects.get(0);

		$("#userPlace")
			.html(g.getLocalities()[0] + ', ' + g.getCountry());
	})
	 .catch(function (err) {
		console.log('Не удалось установить местоположение', err);
	});
	}