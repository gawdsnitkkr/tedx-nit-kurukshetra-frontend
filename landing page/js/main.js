
function splittext() {
	TweenMax.to('#main_info_cont', 1, 
	{
		opacity: 0,
		delay: 5
	}
	)
	;
	TweenMax.to('#coming_soon', 0.5, 
	{
		opacity: 1,
		delay: 5
	}
	)
	;
	var i = -20;
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
	TweenMax.to('#coming_soon', 0.5, 
	{
		opacity: 0
	}
	)
	;
	TweenMax.to('#main_info_cont', 1, 
	{
		opacity: 1,
		onComplete: splittext
	}
	)
	;
}
start();