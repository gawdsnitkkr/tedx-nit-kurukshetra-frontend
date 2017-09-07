function swiwel() {
    TweenMax.to("#college-name", 2.5, {
            rotationX: 0,
            delay: 0.5,
            ease: Elastic.easeOut.config(1, 0.2)
        }
    );
    TweenMax.staggerFrom(".social-icons img", 1, {
            scale: 2,
            opacity: 0,
            delay: 1,
            ease: Bounce.easeOut
        },
        0.2
    );
    TweenMax.staggerFrom("span", 0.7, {
            opacity: 0,
            delay: 2,
            repeat: 3,
            yoyo: true,
            ease: Bounce.easeOut
        },
        0.1
    );
}
swiwel();