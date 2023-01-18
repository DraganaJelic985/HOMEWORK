4/*4.	Write a function that finds the smallest element of a given array. 
The function should return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output:  { minValue: -2, minLastIndex: 6 }
*/

function minValueAndIndex (array){

    var minVal = 0;
    var index = 0;

for (i=0; i<array.length; i++){
    if(minVal>array[i]){
        minVal = array[i];
    }
}
index = array.lastIndexOf(minVal)

var obj = {
    minValue: minVal,
    minLastIndex: index
}

    return obj
}
var rezultat = minValueAndIndex([1, 4, -2, 11, 8, 1, -2, 3]);
console.log (rezultat)

