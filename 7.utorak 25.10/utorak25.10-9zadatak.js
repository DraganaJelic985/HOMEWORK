/*9.	Write a program that calculates the sum of odd elements of a given array. */

function sumOfOdd(array){
    var sum = 0;
    for (i=0; i< array.length; i++){
        if ( array[i]%2!=0){
            sum += array[i]
        }
    }
    return "Sum of odd elements of a given array is " +sum
}
var rezultat= sumOfOdd([2, 4, 7, 8, 7, 7, 1])
console.log (rezultat)
