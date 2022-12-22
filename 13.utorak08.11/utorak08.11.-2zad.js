/*	Write a function that takes a number and returns array of its digits.*/

function vratiNiz(num){
    var niz= num.toString().split("")
    return niz.join(',')
}
var rezultat= vratiNiz(123)
console.log(rezultat)