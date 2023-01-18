/*7.	Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] 
*/

function filterElements (array){
 var filtriranNiz = [];
    function checkOddNumbers (num){
        var result='';    
        if (num%2 != 0){
            result = true;
        }
        return result;
    }
for (i=0; i<array.length; i++){
    num = array[i];
    if(checkOddNumbers(num)==true){
        filtriranNiz.push(num)
    }
}
return filtriranNiz;
}
var rezultat= filterElements([2, 8, 11, 4, 9, 3]);
console.log(rezultat)