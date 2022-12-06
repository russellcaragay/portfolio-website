var documentStyle = document.documentElement.style;

// Variables for Project Images
var diceImage = "images/projects/dice";
var gcalcImage = "images/projects/gcalc";
var pianoImage = "images/projects/piano";
var pomodoroImage = "images/projects/pomodoro";
var rakkersImage = "images/projects/rakkers";
var simonImage = "images/projects/simon";

var projectImageArray = [gcalcImage,rakkersImage,pomodoroImage,diceImage,simonImage,pianoImage];

var ParticleColor = "#000000";
ParticleJS()
//---WORKING LOOP FOR CHANGING MODE TO DARK MODE
// for(var i = 0; i<projectImageArray.length; i++){
//   document.querySelectorAll(".phone-image")[i].src= projectImageArray[i] + "-phone-dark.png";
//   document.querySelectorAll(".web-mockup")[i].src= projectImageArray[i] + "-web-dark.png";
// };
//var try1 = gcalcImage +"dark.png";

//document.querySelector("#gcalc-phone").src="images/projects/gcalc-phone-dark.png";


function lightMode(){
  ParticleColor = "#000000";
  documentStyle.setProperty('--background-color', '#fbfbfb');
  documentStyle.setProperty('--secondary-background-color', '#edeff0');
  documentStyle.setProperty('--tertiary-background-color', '#112b3c');

  documentStyle.setProperty('--primary-font-color', 'black');
  documentStyle.setProperty('--secondary-font-color', '#190a37');
  documentStyle.setProperty('--tertiary-font-color', '#f5f3f3');
  documentStyle.setProperty('--skill-detail-font-color', '#e8e8e8');

  documentStyle.setProperty('--section-break-color', '#1363df');
  documentStyle.setProperty('--skill-section-break-color', '#d0e3ff');
  ParticleJS()
  for(var i = 0; i<projectImageArray.length; i++){
    document.querySelectorAll(".phone-image")[i].src= projectImageArray[i] + "-phone-light.png";
    document.querySelectorAll(".web-mockup")[i].src= projectImageArray[i] + "-web-light.png";
  };

}

function darkMode(){
  ParticleColor = "#FFFFFF";

  documentStyle.setProperty('--background-color', '#101010');
  documentStyle.setProperty('--secondary-background-color', '#112B3C');
  documentStyle.setProperty('--tertiary-background-color', '#D6E4E5');

  documentStyle.setProperty('--primary-font-color', '#F5F5F5');
  documentStyle.setProperty('--secondary-font-color', '#F2F2F2');
  documentStyle.setProperty('--tertiary-font-color', '#121212');
  documentStyle.setProperty('--skill-detail-font-color', 'black');

  documentStyle.setProperty('--section-break-color', '#C9DCFB');
  documentStyle.setProperty('--skill-section-break-color', 'black');
  ParticleJS()

  for(var i = 0; i<projectImageArray.length; i++){
    document.querySelectorAll(".phone-image")[i].src= projectImageArray[i] + "-phone-dark.png";
    document.querySelectorAll(".web-mockup")[i].src= projectImageArray[i] + "-web-dark.png";
  };
}

// Particle Js Configuration

function ParticleJS(){
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
        "value": ParticleColor
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": ParticleColor
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
        "color": ParticleColor,
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
}