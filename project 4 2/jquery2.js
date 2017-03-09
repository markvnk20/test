// Hide jQuery "loading" message
$.mobile.loading().hide();


// Trailer video
$(document).ready(function(){
	$(".trailer-video")[0].play();	
	$('.trailer-video').on('ended',function(){
      		$('.trailer-container').hide(500);
		$('.main-container').show(500);
		$('.button1').addClass("active"); 
	setTimeout(function(){
		$('.left').addClass('open-left');
		$('.right').addClass('open-right');
			$(this).parent().parent().parent('.slide')
				.delay(700)
	  			.queue(function(next) { 
	    			$(this).stop().css({
					"background-image": "url(image1.jpg)",
					"background-repeat": "",
					"background-size": ""
				});
	    			next(); 
	  		});
			setTimeout(function(){
				$(".slide-overlay .overlay-left , .slide-overlay .overlay-right").empty();
				$(".slide-overlay .overlay-left").append('<div class="left-content"><img class="img1-l" src="logo2.png"><img class="rated1 rated" src="rp-rated.png"><a href="#"><div class="left-button"><h5>Visit Official Website</h5></div></a></div>');
				$(".slide-overlay .overlay-right").prepend('<div class="right-content"><img class="img1-r" src="link.png"></div>');
				$('.left, .right').stop().removeClass('change');
			}, 500);
			setTimeout(function(){
				$('.rated1').addClass('rated-slide');
				$('.slide .img1-l').addClass('img1-l-slide');
			}, 1000);
			setTimeout(function(){
				$('.buttons').addClass("active-load"); 
				$('.slide .img1-r').addClass('link-slide');
			}, 1600);
			setTimeout(function(){
				$('.left-content .left-button').addClass('left-button-slide');
			}, 2400);
	}, 600);
	});
});

// Slider Hover Animation
$(document).ready(function() { 
	
});

// Fade In 
$(document).ready(function() { 	
$(window).scroll(function() {
	var bottom_of_object = $('.content1-width').offset().top - $('.content1-width').outerHeight();
	var bottom_of_window = $(window).scrollTop() + $(window).height();
	if( bottom_of_window > bottom_of_object + 200){
     		$('.content1-width').addClass('fadeIn')
	}
});


});

// Fixed navigation bar on scroll
$(document).ready(function() {
	$(window).scroll(function() {
		if($(window).scrollTop() >= $('.content1-nav-height').position().top + 50) {
			$('ul.content1-nav').addClass('fixed');
			$('ul.content1-nav li').addClass('color');
		}
		else {
			$('ul.content1-nav').removeClass('fixed');
			$('ul.content1-nav li').removeClass('color');
		}
	});
});

// Show more and Show less
var limit = 900;
var dot = "..."
var x = $('.content2-left').html();
if(x.length > limit) {
	var orginalText = $('.content2-left').html();
	var textLimit = x.substr(0, limit);
	var text = textLimit + '<span class="dot">'+dot+'</span>' + '<br><span class="more">Show more</span>';
	$('.content2-left').html(text);
}
$('.more').click(function() {
	$('.content2-left').html(orginalText);
	$('.dot').toggle();
	$(this).toggleClass('more-less');
	if($(this).hasClass('more-less')) {
		$(this).html('Show less');
	}
	else {
		$(this).html('Show more');
	}
});


$(document).ready(function() { 
	var x = 0;

	// Adjust percentage in intervals of 100 to set main slide 
	var visibleSlide = "-300%";
	// Amount of slides before returning to main slide.
	var maxLeft = "-4";
	var maxRight = "4";
	// Slide Speed
	var slideSpeed = 300;
	$('.content1-width .slide-container').css({"left": visibleSlide});	
	/*
	// Set interval for image to slide
	function slideRight() {
		x--;
		$(".content1-width .slide-container").finish().animate({
        			left: '-=100%',
    		}, slideSpeed);
		if(x == maxLeft) {
			x = 0;
			$(".content1-width .slide-container").finish().animate({"left": visibleSlide});
		}
	}
	window.setInterval(slideRight, 5100);
	*/
	// Click Image slide left
	$('.slide-left-button').click(function() {
		x++;
		$('.content1-width .slide-container').finish().animate({
        			left: '+=100%',
    		}, slideSpeed);
		if(x == maxRight) {
			x = 0;
			$('.content1-width .slide-container').finish().animate({"left": visibleSlide});	
		}
		$("video").each(function() {
    			$(this).get(0).pause();
			
		});
	})

	// Click Image slide right
	$('.slide-right-button').click(function() {
		x--;
		$('.content1-width .slide-container').finish().animate({
        			left: '-=100%',
    		}, slideSpeed);
		if(x == maxLeft) {
			x = 0;
			$('.content1-width .slide-container').finish().animate({"left": visibleSlide});
		}
		$("video").each(function() {
    			$(this).get(0).pause();
			
		});
	})

	// Swipe Image slide right
	$(".content1-width .slide-container").on("swiperight",function(){
		x++;
		$(this).finish().animate({
        			left: '+=100%',
    		}, slideSpeed);
		if(x == maxRight) {
			x = 0;
			$(this).finish().animate({"left": "-300%"});
		}
		$("video").each(function() {
    			$(this).get(0).pause();
			
		});
		
 	 });

	// Swipe Image slide right
	 $(".content1-width .slide-container").on("swipeleft",function(){
		x--;
		$(this).finish().animate({
        			left: '-=100%',
    		}, slideSpeed);
		if(x == maxLeft) {
			x = 0;
			$(this).finish().animate({"left": visibleSlide});
		}
		$("video").each(function() {
    			$(this).get(0).pause();
			
		});
		 
 	 });
	
		
	// Adjust slider height incase of image height difference
	
});


$(document).ready(function() {
	/*
	$('.button1').addClass("active"); 
	setTimeout(function(){
		$('.left').addClass('open-left');
		$('.right').addClass('open-right');
			$(this).parent().parent().parent('.slide')
				.delay(700)
	  			.queue(function(next) { 
	    			$(this).stop().css({
					"background-image": "url(image1.jpg)",
					"background-repeat": "",
					"background-size": ""
				});
	    			next(); 
	  		});
			setTimeout(function(){
				$(".slide-overlay .overlay-left , .slide-overlay .overlay-right").empty();
				$(".slide-overlay .overlay-left").append('<div class="left-content"><img class="img1-l" src="logo2.png"><img class="rated1 rated" src="rp-rated.png"><a href="#"><div class="left-button"><h5>Visit Official Website</h5></div></a></div>');
				$(".slide-overlay .overlay-right").prepend('<div class="right-content"><img class="img1-r" src="link.png"></div>');
				$('.left, .right').stop().removeClass('change');
			}, 500);
			setTimeout(function(){
				$('.rated1').addClass('rated-slide');
				$('.slide .img1-l').addClass('img1-l-slide');
			}, 1200);
			setTimeout(function(){
				$('.buttons').addClass("active-load"); 
				$('.slide .img1-r').addClass('link-slide');
			}, 1800);
			setTimeout(function(){
				$('.left-content .left-button').addClass('left-button-slide');
			}, 2600);
	}, 600);
	*/
	$(".button").on("click", function() {
        	$(".button").removeClass("active");  
        	$(this).addClass("active");
		
   	 });
	$('.button1').on("click", function() {
		$('.left, .right').addClass('change');
		$(this).parent().parent().parent('.slide')
			.delay(700)
  			.queue(function(next) { 
    				$(this).stop().css({
					"background-image": "url(image1.jpg)",
					"background-repeat": "",
					"background-size": ""
				});
    				next(); 
  			});
		setTimeout(function(){
			$(".slide-overlay .overlay-left , .slide-overlay .overlay-right").empty();
			$(".slide-overlay .overlay-left").append('<div class="left-content"><img class="img1-l" src="logo2.png"><img class="rated1 rated" src="rp-rated.png"><a href="#"><div class="left-button"><h5>Visit Official Website</h5></div></a></div>');
			$(".slide-overlay .overlay-right").prepend('<div class="right-content"><img class="img1-r" src="link.png"></div>');
			$('.left, .right').stop().removeClass('change');
		}, 1200);
		setTimeout(function(){
			$('.rated1').addClass('rated-slide');
			$('.slide .img1-l').addClass('img1-l-slide');
		}, 1900);
		setTimeout(function(){
			$('.slide .img1-r').addClass('link-slide');
		}, 2500);
		setTimeout(function(){
			$('.left-content .left-button').addClass('left-button-slide');
		}, 3000);
	});

	$('.button2').on("click", function() {
		$('.left, .right').addClass('change');
		$(this).parent().parent().parent('.slide')
			.delay(700)
  			.queue(function (next) { 
    				$(this).stop().css({
					"background-image": "url(image2.jpg)",
					"background-repeat": "",
					"background-size": ""
				});
    				next(); 
  			});
		setTimeout(function(){
			$(".slide-overlay .overlay-left, .slide-overlay .overlay-right").empty();
			$(".slide-overlay .overlay-left").prepend('<img class="img2-logo" src="twilight.png">')
			$(".slide-overlay .overlay-left").prepend('<div class="left-content2"><img class="img2-l" src="link2.png"><img class="rated2 rated" src="rp-rated.png"></div>');
			$(".slide-overlay .overlay-right").prepend('<div class="right-content2"><img class="img2-r" src="dark-link.png"><a href="#"><div class="right-button2"><h5>Visit Official Website</h5></div></a></div>');
			$('.left, .right').stop().removeClass('change');
		}, 1200);
		setTimeout(function(){
			$('.rated2').addClass('rated-slide');
			$('.slide .overlay-left .img2-logo').addClass('logo-fade');
		}, 2000);
		setTimeout(function(){
			$('.slide .overlay-left .img2-l').addClass('link-slide');
		}, 2800);
		setTimeout(function(){
			$('.slide .img2-r').addClass('link-slide');
		}, 2200);
		setTimeout(function(){
			$('.slide .overlay-right .right-button2').addClass('button-fade');
		}, 3600);
	})

	$('.button3').on("click", function() {
		$('.left, .right').addClass('change');
		$(this).parent().parent().parent('.slide')
			.delay(700)
  			.queue(function(next) { 
    				$(this).stop().css({
					"background-image": "url(image3.jpg)",
					"background-repeat": "",
					"background-size": ""
				});
    				next(); 
  			});
		setTimeout(function(){
			$(".slide-overlay .overlay-left, .slide-overlay .overlay-right").empty();
			$(".slide-overlay .overlay-left").prepend('<div class="left-content3"><img class="img3-l" src="logo5.png"><img class="cloud-left" src="cloud-left.png"><img class="cloud-right" src="cloud-right.png"><a href="#"><div class="right-button3"><h5>Visit Official Website</h5></div></a><img class="img3-l2" src="toon-link.png"></div>');
			$(".slide-overlay .overlay-right").prepend('<div class="right-content3"><img class="img3-r" src="group.png"><img class="rated3 rated" src="rp-rated.png"><img class="cloud-left2" src="cloud-left.png"><img class="cloud-right2" src="cloud-right.png"></div>');
			$('.left, .right').stop().removeClass('change');
		}, 1200);
		setTimeout(function(){
			$('.img3-r').addClass('img3-r-animate');
		}, 2400);
		setTimeout(function(){
			$('.slide1 .link').addClass('slide1-slide');
			$('.cloud-left2').addClass('cloud-left-animate');
			$('.cloud-right2').addClass('cloud-right-animate');
		}, 2500);
		setTimeout(function(){
			$('.img3-l').addClass('img3-l-animate');
		}, 3100);
		setTimeout(function(){
			$('.cloud-left').addClass('cloud-left-animate');
			$('.cloud-right').addClass('cloud-right-animate');
		}, 3200);
		setTimeout(function(){
			$('.img3-l2').addClass('img3-l2-animate');
			$('.right-button3').addClass('right-buttom3-slide');
		}, 3800);
	})

	$('.button4').on("click", function() {
		$('.left, .right').addClass('change');
		$(this).parent().parent().parent('.slide')
			.delay(700)
  			.queue(function (next) { 
    				$(this).stop().css({
					"background-image": "url(image4.jpg)",
					"background-repeat": "repeat",
					"background-size": "initial"
				});
    				next(); 
  			});
		setTimeout(function(){
			$(".slide-overlay .overlay-left, .slide-overlay .overlay-right").empty();
			$(".slide-overlay .overlay-left").prepend('<div class="left-content4"><img class="img4-l" src="triforce.png"></div>');
			$(".slide-overlay .overlay-right").prepend('<div class="right-content4"><img class="img4-r" src="triforce-logo.png"><a href="#"><div class="right-button4"><h5>Visit Official Website</h5></div></a><img class="rated3 rated" src="rp-rated.png"></div>');
			$('.left, .right').stop().removeClass('change');
		}, 1200);
		setTimeout(function(){
			$('.rated3').addClass('rated-slide');
			$('.slide .overlay-left .img4-l').addClass('img4-l-slide');
		}, 2000);
		setTimeout(function(){
			$('.right-content4 .img4-r').addClass('img4-r-slide');
			$('.right-content4 .right-button4').addClass('button4-slide');
		}, 2700);	
	})
})

$(document).ready(function(){
	var x = -100;
	var firstCharacter = $('.hex-container:first-child').attr('data-name');
	$('#name1').addClass('name-show').html(firstCharacter);
	$('.left2').addClass('arrow-fade');
	var removeArrow = function() {
		// Hexagon remove left and right arrow
		if($('div.hex-container:first-child').hasClass('active')) {
			$('.left2').addClass('arrow-fade');
		}
		else {
			$('.left2').removeClass('arrow-fade');
		}
		if($('div.hex-container:last-child').hasClass('active')) {
			$('.right2').addClass('arrow-fade');
		}
		else {
			$('.right2').removeClass('arrow-fade');
		}
		if(!$('div.hex-container:last-child').hasClass('active')) {
			$('.right2').removeClass('arrow-fade');
		}
		else {
			$('.right2').addClass('arrow-fade');
		}		
	}
	$('.hex-container:first-child').addClass('active');
	if($('.hex-container.active')) {
		$('.hex-container.active').addClass('pager-active');
	}
	else {
		$('.hex-container').addClass('pager-inactive ')
	}
	$('.hex-container').each(function(i, obj) {
		x = x + 100;
		$(this).attr( 'data-value', x);
	});
	$('.hex-container').on('click', function() {
		removeArrow();
		var a = $('.slide-container2').css('left');
		var slidePercentage = $(this).attr('data-value');
		var nameOverlay = $(this).attr('data-overlay');
		var name = $(this).attr('data-name');
		$(nameOverlay).html(name);
		$('.name').removeClass('name-show');
		$(nameOverlay).addClass('name-show');
		$('.slide-container2').animate({"left": '-' + slidePercentage + '%'}, 300);
		$('.hex-container').removeClass('active pager-active');
		$(this).addClass('active pager-active');
		removeArrow();
	});
	$('.left2').click(function() {
		var activeHex = $(this).attr('data-active');
		var name = $(activeHex).attr('data-name');
		var currentSlide = $(activeHex).attr('data-value');
		$(activeHex).prev().addClass('active pager-active');
		$('.slide-container2').animate({"left": "+=100%"}, 200);	
		if('.hex-container.active') {
			$('.hex-container.active').next().removeClass('active pager-active');
			var z = $('.hex-container.active').attr('data-name');
			var v = $('.hex-container.active').attr('data-overlay');
			$(v).html(z);
			$('.name').removeClass('name-show');
			$(v).addClass('name-show');
		}
		removeArrow();
	});
	$('.right2').click(function() {
		var activeHex = $(this).attr('data-active');
		var name = $(activeHex).attr('data-name');
		$(activeHex).next().addClass('active pager-active');
		$('.slide-container2').animate({"left": "-=100%"}, 200);	
		if('.hex-container.active') {
			$('.hex-container.active').prev().removeClass('active pager-active');
			var z = $('.hex-container.active').attr('data-name');
			var v = $('.hex-container.active').attr('data-overlay');
			$(v).html(z);
			$('.name').removeClass('name-show');
			$(v).addClass('name-show');
		}
		removeArrow();	
	});
	$('.slide-container2 img').each(function() {
		var characterActive = $()
	})
	$('.slide-container2 img').click(function() {
		var characterSrc = $(this).attr('src');	
		var characterName2 = $(this).siblings('h1').html();
		var characterInfo = $(this).siblings('p').html();
		
		$('.character-container img').attr('src', characterSrc);
		$('.character-info').fadeIn(300, function() {
			$('.character-info img').addClass('img-fadeIn');
		});
		$(this).addClass('fadeOut');
		$('.character-info p').html(characterInfo)
		
	});
	$('.character-info-exit').click(function() {
		$('.character-info').fadeOut(300);
		$('.character-info img').removeClass('img-fadeIn');
		$('.slide-container2 img').removeClass('fadeOut');
	});
});	

$(document).ready(function (){

    var canvas = document.getElementById('c'),
        context = canvas.getContext('2d');

    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

    function Point(x,y,distance){
        this.x = x;
        this.y = y;
        this.distance = distance;
        this.radius = 3*distance;
        this.velocity = distance*(1+Math.random());

        this.opacity = 1 - this.distance/10;

        return this;
    }

    Point.prototype.draw = function (){
        var _radgrad = context.createRadialGradient(this.x,this.y,0,this.x,this.y,this.radius);
        _radgrad.addColorStop(0, 'rgba(255,255,255,' + this.opacity + ')');
        _radgrad.addColorStop(0.1, 'rgba(255,255,255,' + this.opacity + ')');
        _radgrad.addColorStop(1, 'rgba(255,255,255,0)');

        context.fillStyle = _radgrad;
        context.beginPath();
        context.arc(this.x,this.y,this.radius,0,2*Math.PI);
        context.closePath();
        context.fill();
    };

    var points = [],
        sizeX = canvas.width,
        sizeY = canvas.height,
        gravity = 0.4;

    var loop = function loop(data){
        clearCanvas();
        var pointsArray = [];

        for (var j=0; j < points.length; j++) {
            var point = points[j];

            if (point.y + point.velocity < sizeY + 20) {
                point.draw();
                point.y += point.velocity*gravity;
                pointsArray.push(point);
            } else {
                var p = new Point(Math.random()*sizeX, -20, point.distance);
                pointsArray.push(p);
            }
        }

        points = pointsArray;

        if (points.length) {
            requestAnimationFrame(loop);
        }
    };

    for (var k=0; k < 50; k++) {
        var p_big = new Point(Math.random()*sizeX, Math.random()*sizeY, 7 + Math.random()*3);
        points.push(p_big);

        var p_small = new Point(Math.random()*sizeX, Math.random()*sizeY, Math.random()*3);
        points.push(p_small);

        var p_tiny = new Point(Math.random()*sizeX, Math.random()*sizeY, Math.random()*3);
        points.push(p_tiny);
    }

    requestAnimationFrame(loop);

    var clearCanvas = function clearCanvas(){
        context.clearRect(0,0,sizeX,sizeY);
    }
});


$(document).ready(function() {
	$(window).scroll(function() {
		
		if($(window).scrollTop() > $('.content4').offset().top - $('.content4').height() + 250) {
			$('.disc').addClass('disc-animate')
			
		}
		else {
			$('.disc').removeClass('disc-animate')
		}
	});
	$('.case').hover(function(){
    		$('.disc').removeClass('disc-animate');
    	}, function(){
    		$('.disc').addClass('disc-animate');
	});
});

$(document).ready(function() {
	$('.content1-nav li').click(function() {
		var content = $(this).attr('data-content');
		$('body, html').stop().animate({
    			scrollTop: $('.' + content).scrollTop()+$('.' + content).offset().top
		}, 500);
	});
});
