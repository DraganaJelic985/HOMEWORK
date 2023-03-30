var divElementi = document.getElementsByTagName("div");

function createDropdownElement(nizOpcija, elem){
    
    var selectEl = document.createElement ("select");
    
    for (var i=0; i<nizOpcija.length; i++){
        var optionEl = document.createElement ("option");
        optionEl.text = nizOpcija[i];
        selectEl.appendChild(optionEl);
    }
    elem.appendChild (selectEl)
}
createDropdownElement(["opcija1", "opcija2", "opcija3"], divElementi[0])
createDropdownElement(["opcija1", "opcija2", "opcija3"], divElementi[divElementi.length-1])


function chackInputElements (){
    debugger
    var inputi = document.querySelectorAll("form > input");
    for (var i=0; i<inputi.length; i++){
        if (inputi[i].hasAttribute("required") && inputi[i].value == ""){
            inputi[i].style.borderColor = "red"
        }
    }


}chackInputElements()







/*function myFunction() {
    var x = document.getElementById("mySelect");
    var option = document.createElement("option");
    option.text = "Kiwi";
    x.add(option);
  }

function myFunction() {
  var x = document.createElement("SELECT");
  x.setAttribute("id", "mySelect");
  document.body.appendChild(x);

  var z = document.createElement("option");
  z.setAttribute("value", "volvocar");
  var t = document.createTextNode("Volvo");
  z.appendChild(t);
  document.getElementById("mySelect").appendChild(z);
}*/
