var fild = window.document.querySelector("div")
var pleyer = window.document.querySelector("img");

function movePlayer(event){
    pleyer.style.left = event.clientX-35+"px";
    pleyer.style.top = event.clientY-50+"px";
}
fild.addEventListener("click", movePlayer);


/*
var x = onclick.clientX;
var y = onclick.clientY;
fild.addEventListener("click", console.log(x+","+y))*/
var p = document.querySelector("p")
function printMousePos(event) {
    p.textContent =
      "clientX: " + event.clientX +
      " - clientY: " + event.clientY;
  }
    
  fild.addEventListener("click", printMousePos);