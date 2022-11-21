/*Write a program to join all elements of the array into a string skipping elements that are
undefined, null, NaN or Infinity.
[NaN, 0, 15, false, -22, '', undefined, 47, null]*/

function skippingElemnts(array){
    var newArray = [];
    for (i=0; i<array.length; i++){
        if (array[i] != undefined && isNaN(array[i]) !=true &&
           isFinite(array[i] != true)){   //ako ne postavim uslov za isNaN on mi ostavi nan u nizu
        newArray.push (array[i])          //a to bi trebalo da bude pokriveno sa isFinity funkcijom.
        }                           
    }
    return newArray.join('')
}
var rezultat = skippingElemnts([NaN, 0, 15, false, -22, '', undefined, 47, null])
console.log(rezultat)