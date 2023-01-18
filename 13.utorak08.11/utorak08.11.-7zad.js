/*7.	Write a function to find and return the first, middle and last element of an array if the array has odd number of elements.
 If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.*/

 function firstMiddleLastElement(array){

    var nizOdabranihElemenata = [];

    if (array.length<4){
        nizOdabranihElemenata = array;
    }
    else if (array.length%2 !=0){
        nizOdabranihElemenata = [array[0], 
                                array[parseInt(array.length/2)],
                                array[array.length-1]]
    }
    else{
        nizOdabranihElemenata = [array[0],array[array.length-1]]
    }
return nizOdabranihElemenata;
 }
var rezultat = firstMiddleLastElement (['prvi', 'drugi', 'treci'])
console.log (rezultat)
var rezultat = firstMiddleLastElement (['prvi', 'drugi', 'treci', 'cetvrti'])
console.log (rezultat)
var rezultat = firstMiddleLastElement (['prvi', 'drugi', 'treci', 'cetvrti', 'peti'])
console.log (rezultat)
