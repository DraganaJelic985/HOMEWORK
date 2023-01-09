/*2.Create a function that returns true if smaller arrays can concatenate to form the target array and false otherwise.
 Arrays do not have to be sorted (see example #2). Arrays should concatenate to create the final array exactly (examples #3 and #4).
Examples: canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) ➞ true
canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) ➞ true
canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false // Duplicate 7s not found in target array.
canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false // Missing 6 from target array.*/

function canConcatenate (input, output){
    debugger;
    var input1 = input.flat().sort(function(a,b){return(a-b)});
    var output1 = output.sort(function(a,b){return(a-b)});
    var result = "";

    if (input1.length != output1.length){
        result = false;
    }
    else{
        for ( var i=0; i<input1.length; i++){
        if(input1[i] == output1[i]){
            result = true;
        }
        else{
            result = false;
            break;
        }
    }               //nisam imala ideju kako da postavim uslov bez sortiranja.
    }               //ako postavim uslov iste duzine, i iskoristim .includes(), on opet ne prepoznaje duplikate...
    return result;
}
var rezultat = canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]);
console.log (rezultat)
var rezultat = canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]);
console.log (rezultat)
var rezultat = canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]);
console.log (rezultat)
var rezultat = canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]);
console.log (rezultat)

