var pozadina = document.querySelector('.marioPoz');
var mario = document.querySelector('.mario');
var xPos = 0;
var yPos = "0px";

function pomeranjePozadine(event) {
    if (event.keyCode === 39) {
        pozadina.style.backgroundPosition = xPos+"px " + yPos;
        xPos-=20;
    }
}

function marioSeKrece(event) {
    if (event.keyCode === 39) {
      mario.src = "./mario_running.gif";
      mario.style.width = "120px";
      document.removeEventListener('keydown', marioSeKrece);
    }
}

function marioStoji(event) {
    if (event.keyCode === 39) {
      mario.src = "./mario.png";
      mario.style.width = "150px";
      document.addEventListener('keydown', marioSeKrece);
    }
}

document.addEventListener('keydown', pomeranjePozadine);
document.addEventListener('keydown', marioSeKrece);
document.addEventListener('keyup', marioStoji);