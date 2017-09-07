var current = document.getElementById('home');
var busy = 0;

function click_anim(obj) {
	if(current !== obj && busy == 0) {
		busy = 1;
		TweenMax.to(current, 0.2, 
		{
			rotationY: 90,
			ease: Circ.easeIn
		}
		);
		TweenMax.to(obj, 0.2, 
		{
			rotationY: 0,
			delay: 0.3,
			ease: Circ.easeOut,
			onComplete: free_busy
		}
		);
		current = obj;
	}
}

function free_busy() {
	busy = 0;
}