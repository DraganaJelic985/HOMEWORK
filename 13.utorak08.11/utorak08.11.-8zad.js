/*8.	Write a function to find the average of N elements. 
Make the function flexible to receive dynamic number or parameters.*/

function findAverage (array){

var average = 0;
var sum = 0;

for (i=0; i<array.length; i++){
    sum += array[i];
}
average = sum/array.length
return average
}
var rezultat = findAverage ([1, 2, 3, 4, 5,6, 7, 8, 9])
console.log(rezultat)
