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


particlesJS('particles-js',
 {
  "particles": {
    "number": {
      "value": 218,
      "density": {
        "enable": true,
        "value_area": 1736.2070190114673
      }
    },
    "color": {
      "value": "#de841e"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 0,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ff8700",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
);