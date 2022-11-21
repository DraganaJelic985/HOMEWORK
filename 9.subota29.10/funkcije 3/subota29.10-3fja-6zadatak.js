/*Write a function to create a specified number of elements with pre-filled numeric value
array.
6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null] */

function ponavljanjeElemenataUNizu(brojPonavljanja, element){
        var niz=[];
    for (i=0; i<brojPonavljanja; i++){
        if (element === undefined){
            element=null;
            niz.push (element)
        }
        else{
        niz.push(element);
    }
}
    return niz
}

var rezultat = ponavljanjeElemenataUNizu(6,0)
console.log (rezultat)
var rezultat = ponavljanjeElemenataUNizu(2, "none")
console.log (rezultat)
var rezultat = ponavljanjeElemenataUNizu(2)
console.log (rezultat)