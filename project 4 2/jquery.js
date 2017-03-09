$(document).ready(function() {
	$('.button1').click(function() {
		$('.slide').fadeOut();
		$('.slide1').fadeIn();
		setTimeout(function(){
			$('.slide1 .link').addClass('slide1-slide');
		}, 1000);
		
	});
	$('.button2').click(function() {
		$(this).parent().siblings('.container').children().hide();
		$('.slide').fadeOut();
		$('.slide2').fadeIn();
		
	})
	$('.button3').click(function() {
		$('.slide').fadeOut();
		$('.slide3').fadeIn();
	})
	$('.button4').click(function() {
		$('.slide').fadeOut();
		$('.slide4').fadeIn();
	})
})

