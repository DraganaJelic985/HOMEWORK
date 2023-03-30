var input1=document.getElementById("input1");
var button1=document.getElementById("button1");
var message1=document.getElementById("message1");
var input2=document.getElementById("input2");
var button2=document.getElementById("button2");
var message2=document.getElementById("message2");



function pomeriPoruku1(){
    var pElem = document.createElement("p");
    pElem.innerHTML = input1.value;
    message1.appendChild(pElem);
    input1.value ="";
}
function pomeriPoruku2(){
    var pElem = document.createElement("p");
    pElem.innerHTML = input2.value;
    message2.appendChild(pElem);
    input2.value ="";
}

button1.addEventListener("click",pomeriPoruku1)
button2.addEventListener("click",pomeriPoruku2)
/*
$('#move_down').click(function() {
    $('#input_1').val($('#input_2').val())
});
var element = document.querySelector('.TxtTile');
var pElem = document.createElement('p');
pElem.className = 'styleforP';
pElem.innerHTML = 'Age';
element.appendChild(pElem);*/