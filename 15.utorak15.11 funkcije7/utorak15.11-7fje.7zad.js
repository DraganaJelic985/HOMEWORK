/*7.	Create a function that returns an array that expands by 1 from 1 to the value of the input, and then reduces back to 1.
 Items in the arrays will be the same as the length of the arrays.
Examples: 
diamondArrays(1) ➞ [1], 
diamondArrays(2) ➞ [1, 2, 2, 1]
diamondArrays(5) ➞ [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1]
*/

function createDiamondArrays(n){

    var diamondArray = [];

    for (i=1; i<=n; i++){
            for (j=1; j<=i; j++){
                diamondArray.push(i)
            }
    }
    for (i=n-1; i>0; i--){
        for (j=i; j>0; j--){
            diamondArray.push (i)
        }
    }
    return diamondArray
}
var rezultat = createDiamondArrays (2);
console.log (rezultat)
var rezultat = createDiamondArrays (5);
console.log (rezultat)
var rezultat = createDiamondArrays (3);
console.log (rezultat)

