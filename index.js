



// Variables for Project Images
var diceImage = "images/projects/dice-phone";
var diceWebImage = "images/projects/dice-web";

var gcalcImage = "images/projects/gcalc-phone";
var gcalcWebImage = "images/projects/gcalc-web";

var pianoImage = "images/projects/piano-phone";
var pianoWebImage = "images/projects/piano-web";

var pomodoroImage = "images/projects/pomodoro-phone";
var pomodoroWebImage = "images/projects/pomodoro-web";

var rakkersImage = "images/projects/rakkers-phone";
var rakkerWebImage = "images/projects/rakker-web";

var simonImage = "images/projects/simon-phone";
var simonWebImage = "images/projects/simon-web";

var phoneArray = [gcalcImage,rakkersImage,pomodoroImage,diceImage,simonImage,pianoImage];
// for(var i = 0; i<phoneArray.length; i++){
//   document.querySelectorAll(".phone-image")[i].src= phoneArray[i] + "-dark.png";
// };
//var try1 = gcalcImage +"dark.png";

//document.querySelector("#gcalc-phone").src="images/projects/gcalc-phone-dark.png";

// Particle Js Configuration

particlesJS("particles-js",{
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#000000"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.4,
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
          "speed": 10,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 120,
        "color": "#000000",
        "opacity": 0.3,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
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
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
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
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  })