/* 5. Write a function that deletes every second element of the given array.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
Output: [3, 1, 90, 23, 67]*/

function deleteElement(arr){
    var newArr = [];
    for (i = 0 ; i < arr.length; i++){
        if(i%2==0){
            newArr.push(arr[i])
        }
    }
    return newArr
}
var rezultat = deleteElement([3, 5, 1, 8, 90, -4, 23, 1, 67]);
console.log(rezultat)