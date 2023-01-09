/*5.	Napisati funkciju koja vraca najveci I najmanji element niza. 
Rezultat prikazati kao niz.*/

function minMaxOfArray (array){
    var newArr = [];

    newArr.push (Math.min (...array));
    newArr.push (Math.max (...array))
    

    return newArr
}
var rezultat = minMaxOfArray([1, 2, 3, 4, 5, 6, 7]);
console.log(rezultat)

