/*2.	Use the following array to make a new one by dividing its values by two and adding 5.
 If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
*/
function newArr (arr){
    for (i=0; i<arr.length; i++){
        arr[i]=(arr[i]/2)+5;
        
        if (arr[i]=== 0){
        arr[i]=20
        }
    }
    return arr
}
var rezultat = newArr( [ 3, 500, -10, 149, 53, 414, 1, 19 ])
console.log (rezultat)
