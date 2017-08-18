
function splittext() {
	var i = -2;
	var interval = setInterval(
		function() {
			i++;
			var obj = '#' + i; 
			$(obj).removeClass('transformation_light');
			$(obj).addClass('transformation');
		
			obj = '#' + (i - 1);
			$(obj).addClass('transformation_light');
			$(obj).removeClass('transformation');


			obj = '#' + (i + 1);
			$(obj).addClass('transformation_light');
			$(obj).removeClass('transformation');

			obj = '#' + (i - 2);
			$(obj).removeClass('transformation_light');
			$(obj).removeClass('transformation');
			if(i == 12){
				clearInterval(interval);
				start();
			}
		}
		,150
	);	
}
function start() {
	$('body').css('background', 'black');
	$('#splash').addClass('hidden');
	TweenMax.to('#coming_soon', 0.5, {
		opacity: 1
	}
	);
	TweenMax.to('#main_info_cont', 1, {
		opacity: 1,
		onComplete: splittext
	}
	);
}

function full_splash() {
	var splash = $('#splash');
	TweenMax.to(splash, 0.5,  {
		scale: 250,
		onComplete: start
	}
	);
}

function splash_screen() {
	var splash = $('#splash');
	TweenMax.to(splash, 0.2, {
		opacity: 0,
		repeat: 5,
		yoyo: true,
		onComplete: full_splash
	}
	);
}
splash_screen();