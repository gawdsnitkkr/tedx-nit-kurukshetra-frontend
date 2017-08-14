
function splittext() {
	TweenMax.to('#main_info_cont', 1, {
		opacity: 0,
		delay: 2.5
	}
	);
	TweenMax.to('#coming_soon', 0.5, {
		opacity: 1,
		delay: 2.5
	}
	);
	var i = -10;
	var interval = setInterval(
		function() {
			i++;
			var obj = '#' + i; 
			console.log(obj);
			$(obj).addClass('transformation');
			obj = '#' + (i - 1);
			$(obj).removeClass('transformation');
			if(i == 20){
				clearInterval(interval);
				start();
			}
		}
		,250
	);	
}
function start() {
	$('body').css('background', '#ff2b06');
	$('#splash').addClass('hidden');
	TweenMax.to('#coming_soon', 0.5, {
		opacity: 0
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
		height: '500vh',
		width: '500vh',
		x: '-500px',
		y: '-800px',
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