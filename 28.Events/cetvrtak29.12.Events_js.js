var dugme1 = window.document.getElementById("dugme1");
var dugme2 = window.document.getElementById("dugme2");

function changeBgColor(){
    var element = document.querySelector("div");
    element.classList.toggle ("divUboji");
}
/*function stopFunctioOfDugme1(){
    dugme1.removeEventListener("click",changeBgColor);
    dugme2.textContent = ("Turn on")
}
function startFunctioOfDugme1(){
    dugme1.addEventListener("click",changeBgColor);
    dugme2.textContent = "Turn off"
}

dugme1.addEventListener("click",changeBgColor);
dugme2.addEventListener("click",stopFunctioOfDugme1);*/
var promenljiva = false;

dugme1.addEventListener("click",changeBgColor);

dugme2.addEventListener('click', () => {
    promenljiva = !promenljiva;

    if (promenljiva){
        dugme1.removeEventListener("click",changeBgColor);
        dugme2.textContent = "Turn on";
    }
    else{
        dugme1.addEventListener("click",changeBgColor);
        dugme2.textContent = "Turn off";
    }
})

/*button.addEventListener('click', () => {
    isSet = !isSet;

    if(isSet) {
        input.removeEventListener('click', logMessage);
        // input.disabled = true;
        input.value = 'Sada ne mozete kliknuti';
    } else {
        input.addEventListener('click', logMessage);
        // input.disabled = false;
        input.value = 'Ovo je input';
    }

    removed();
});*/
