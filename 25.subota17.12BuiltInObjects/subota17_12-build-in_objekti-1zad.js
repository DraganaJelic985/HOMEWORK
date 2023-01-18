/*1.	Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]
*/
function duplicateElementOfArray(array){

    var newArr=[];
    for (i=0; i<array.length;i++){
        newArr.push (array[i]);
        newArr.push (array[i]);

    }
    return newArr;
}
var rezultat = duplicateElementOfArray([2, 4, 7, 11, -2, 1]);
console.log(rezultat)