/*.	Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]*/


function rotacija(niz, k){
    
    odseceniNiz= niz.slice(0,k)
    ostatakNiza= niz.slice(k)
    ostatakNiza.push(odseceniNiz)
    
    return ostatakNiza.flat()
}
var rezultat= rotacija([1,2,3,4,5,6], 2)
console.log (rezultat)