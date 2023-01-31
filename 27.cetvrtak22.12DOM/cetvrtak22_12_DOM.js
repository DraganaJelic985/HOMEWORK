function obojPozadinu(element, color){
   element.style.backgroundColor = color;
}
var elemUl = document.getElementsByTagName("ul");

function drugaLista(){
   var elemUl = document.getElementsByTagName("ul");
   elemUl[1].className = "drugaLista";
}drugaLista()

var liElementi = document.getElementsByTagName("li");

function sviLiElementi(){
   for (i=0; i<liElementi.length; i++){
      liElementi[i].className = "liElem";
      liElementi[i].style.backgroundColor = "green";
}
}sviLiElementi()

//pokusala sam da napravim zadnju ul listu preko doma ali ne funkcionise....
/*var zadnjaUl = document.createElement("ul")
document.body.appendChild("zadnjaUl")
var liZadnjeUl = document.createElement("li")
zadnjaUl.appendChild ("liZadnjeUl")
var text = document.createTextNode("neki tekst")
liZadnjeUl.appendChild("text")*/
 elemUl[elemUl.length-1].className = "zadnjaUl"

 function zadnjaLIsta(){
 var liZadnjeUl =document.querySelectorAll("ul.zadnjaUl>li") ;
 for (i=0; i<liZadnjeUl.length; i++){
   liZadnjeUl[i].className = "liZadnjeUl"
   liZadnjeUl[i].style.backgroundColor = "red";
   var text = liZadnjeUl[i].textContent
   liZadnjeUl[i].innerHTML = text.toUpperCase()
 }
}zadnjaLIsta()




 