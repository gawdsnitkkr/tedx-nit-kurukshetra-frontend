var current = document.getElementById("home");
function click_anim(obj) {
    if(current != obj) {
        $(current).fadeOut(200, function() {
            $(obj).fadeIn(200);
        })
        current = obj;
    }
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;		
}

function addBubbles() {
    for(var i = 1; i <= 100; i++) {
        bubble = document.createElement('div');
        var r = getRandomInt(1,3);
            if(r == 1)
                bubble.className = 'blue_circle';
            else if(r == 2)
                bubble.className = 'red_circle';
            else if(r == 3)
                bubble.className = 'yellow_circle';
        document.getElementById("home").append(bubble);
        bubble.style.left = getRandomInt(0, window.innerWidth) + 'px';
        bubble.style.top = getRandomInt(0, window.innerHeight) +'px';
    }
    animate();
}

addBubbles();
function animate() {
    TweenMax.staggerTo(".red_circle", 0.5, {
        scale: 1.05,
        opacity: 0.7,
        repeat: -1,
        yoyo: true, 
        ease: Power0.easeNone
    }
    , 0.1
    );
    TweenMax.staggerTo(".yellow_circle", 0.65, {
        scale: .95,
        opacity: 0.55,
        repeat: -1,
        yoyo: true, 
        ease: Power0.easeNone
    }
    , 0.3
    );
    TweenMax.staggerTo(".blue_circle", 0.35, {
        scale: 1.05,
        opacity: 0.65,
        repeat: -1,
        yoyo: true, 
        ease: Power0.easeNone
    }
    , 0.2
    );
}