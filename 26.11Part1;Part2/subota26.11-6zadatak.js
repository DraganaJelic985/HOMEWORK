/*6. Write a function that replaces the elements of the given array between two positions with their doubled values. 
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 
Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]*/

function replaseElementsWidthDoubledValues (arr,p1,p2){
var newArr = [];  
    for (i=0; i<arr.length; i++){
        if( i>=p1 && i<=p2 ){
            newArr.push (arr[i]*2)
        }
        else{
            newArr.push(arr[i])
        }
    }
return newArr
}
var rezultat = replaseElementsWidthDoubledValues([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 );
console.log (rezultat)
