/*8. Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’. 
Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’]
Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]
*/

function checkingNumOfLetersA (arr){
    debugger;
var brojac = 0;
var nizBrojaca = [];

    for ( var i=0; i<arr.length; i++){
        for(var j=0; j<arr[i].length; j++){
            if (arr[i][j]=='a' || arr[i][j] == 'A'){
                brojac +=1;
            }
        }
        nizBrojaca[i]= brojac;
            brojac=0;
    }console.log(nizBrojaca)
    return nizBrojaca;
}
function sortingArrByNumOfLettersA(arr){
    debugger;
var brojReci = arr.length;
var newArr = [];

    var nizBrojaca = checkingNumOfLetersA (arr); 
for (i = 0; i< brojReci; i++){
    var indexMin =nizBrojaca.indexOf(Math.min(...nizBrojaca)) 
    newArr.push(arr[indexMin])
    nizBrojaca.splice(indexMin,1)
    arr.splice(indexMin,1)
}

    return newArr;
}
var rezultat = sortingArrByNumOfLettersA (['apple', 'tea', 'amazing', 'morning', 'JavaScript']);
console.log (rezultat)

