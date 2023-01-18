/*3.	
a.	Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true
 
b.	Write a function that counts the number of elements less than the middle element. 
If the given array has an even number of elements, print out an error message. 
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4 */

function checkNumOfElements(array){

    var result = "";
    var numOfElToMiddle = 0;

    if (array.length %2 == 0){
        result = "Error" 
    }
    else{
        numOfElToMiddle = parseInt(array.length/2)
        result = "true"+"\n"+"Do polovine niza ima "+numOfElToMiddle+ "elemenata."
    }

    return result;
}
var rezultat = checkNumOfElements ([1, 2, 9, 2, 1]);
console.log(rezultat)
var rezultat = checkNumOfElements ([-1, 8.1, 3, 6, 2.3, 44, 2.11]);
console.log(rezultat)
var rezultat = checkNumOfElements ([-1, 3, 6, 2.3, 44, 2.11]);
console.log(rezultat)

