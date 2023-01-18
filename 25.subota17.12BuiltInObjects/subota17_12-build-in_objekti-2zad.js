/*2.	Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] 
*/

function removeDuplicates (array){

    var newArr = [];
    array.sort (function(a,b){return (a-b)})

    for(i=0; i<array.length; i++){
        if(array[i] != array[i+1]){
            newArr.push (array[i])
        }
        
    }

    return newArr;
}
var rezultat = removeDuplicates ([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]);
console.log (rezultat)

