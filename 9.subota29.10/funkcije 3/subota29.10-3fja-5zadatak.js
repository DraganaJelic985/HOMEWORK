/*Write a function to get the last element of an array. Passing a parameter  'n'  will return the
last  'n'  elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]  */


function lastElement (array, n){
    if (n === undefined){
        array.splice(0,array.length-1)
    }
    else{
   array.splice(0,array.length-n)
    }

    return array
}
var rezultat = lastElement([7, 9, 0, -2] )
console.log (rezultat)
var rezultat = lastElement([7, 9, 0, -2],2 )
console.log (rezultat)