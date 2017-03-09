$(document).ready(function() {
	$(".button").on("click", function() {
        	$(".button").removeClass("active");  
        	$(this).addClass("active");   
		if('.button.active') {
			
		}   
       
    	});
	$('.button1').click(function() {
		$('.left, .right').addClass('change');
		$(this).parent().siblings('.container').children('.slide-container').children('.slide')
			.delay(1200)
  			.queue(function(next) { 
    				$(this).stop().css("background-image", "url(image1.jpg)");
    				next(); 
  			});
		setTimeout(function(){
			$(".slide-overlay .overlay-left , .slide-overlay .overlay-right").empty();
			$(".slide-overlay .overlay-left").append('<div class="left-content"><img class="img1-l" src="logo2.png"><div class="left-button">Visit Official Website</div></div>');
			$(".slide-overlay .overlay-right").prepend('<div class="right-content"><img class="img1-r" src="link.png"></div>');
			$('.left, .right').stop().removeClass('change');
		}, 1200);
		setTimeout(function(){
			$('.slide .img1-l').addClass('img1-l-slide');
		}, 1900);
		setTimeout(function(){
			$('.slide .img1-r').addClass('link-slide');
		}, 2500);
		setTimeout(function(){
			$('.left-content .left-button').addClass('left-button-slide');
		}, 3300);
	});

	$('.button2').click(function() {
		$('.left, .right').addClass('change');
		$(this).parent().siblings('.container').children('.slide-container').children('.slide')
			.delay(1200)
  			.queue(function (next) { 
    				$(this).stop().css("background-image", "url(image2.jpg)");
    				next(); 
  			});
		setTimeout(function(){
			$(".slide-overlay .overlay-left, .slide-overlay .overlay-right").empty();
			$(".slide-overlay .overlay-left").prepend('<div class="left-content2"><img class="img2-l" src="link2.png"></div>');
			$(".slide-overlay .overlay-right").prepend('<div class="right-content2"><img class="img2-r" src="dark-link.png"></div>');
			$('.left, .right').stop().removeClass('change');
		}, 1200);
		setTimeout(function(){
			$('.slide .overlay-left .img2-l').addClass('link-slide');
		}, 2800);
		setTimeout(function(){
			$('.slide .img2-r').addClass('link-slide');
		}, 2200);
	})

	$('.button3').click(function() {
		$('.left, .right').addClass('change');
		$(this).parent().siblings('.container').children('.slide-container').children('.slide')
			.delay(1200)
  			.queue(function (next) { 
    				$(this).stop().css("background-image", "url(image3.jpg)");
    				next(); 
  			});
		setTimeout(function(){
			$(".slide1").empty();
			$('.left, .right').stop().removeClass('change');
		}, 1200);
		setTimeout(function(){
			$('.slide1 .link').addClass('slide1-slide');
		}, 2000);
	})

	$('.button4').click(function() {
		$('.left, .right').addClass('change');
		$(this).parent().siblings('.container').children('.slide-container').children('.slide')
			.delay(1200)
  			.queue(function (next) { 
    				$(this).stop().css("background-image", "url(image4.jpg)");
    				next(); 
  			});
		setTimeout(function(){
			$(".slide1").empty();
			$('.left, .right').stop().removeClass('change');
		}, 1200);
		setTimeout(function(){
			$('.slide1 .link').addClass('slide1-slide');
		}, 2000);
	})
})

