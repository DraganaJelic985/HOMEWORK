function changeElementActive(){
    var active = document.querySelector("li.active");
    active.classList.remove("active");
    var active1 = document.getElementsByTagName("li");
    active1[0].classList.add("active");
}
changeElementActive()

function alertNavList (){
    var nav = document.querySelectorAll("nav>ul>li");
    for(i=0; i<nav.length;i++){
        var text = nav[i].textContent;
        alert(text)
    }
}
alertNavList()

function changeText (text){
    var nav = document.querySelectorAll("nav>ul>li");
    nav[nav.length-1].textContent = text;
}
changeText("promenila sam tekst")