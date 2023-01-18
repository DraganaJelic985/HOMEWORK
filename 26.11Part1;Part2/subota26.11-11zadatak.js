/*11. Write a function that prints out an array of the numbers aligned from the right side.
Input: [78, 111, 4, 4321]
Output: 
  78
 111 
   4
4321
*/
function numToStrArr (nizBrojeva){
    var nizStringova = [];

    for ( var i=0; i<nizBrojeva.length; i++){
        nizStringova.push (nizBrojeva[i].toString())
    }
    return nizStringova
}
function najduziBroj (nizBrojeva){
    var nizStringova =numToStrArr(nizBrojeva);
    var maxDuzina = 0;

    for ( var i=0; i<nizStringova.length; i++){
        if (nizStringova[i].length>maxDuzina){
            maxDuzina = nizStringova[i].length;
        }
    }
    return maxDuzina;
}
function printNumLeftAlign(nizBrojeva){
    var result = '';
    var maxDuzina = najduziBroj(nizBrojeva);
    var nizStringova = numToStrArr(nizBrojeva);

    for( i=0; i<nizBrojeva.length; i++){
        for (j=0; j<maxDuzina-nizStringova[i].length; j++){
            result += " ";
        }
        result += nizBrojeva[i] + '\n';
 }
    return result;
}
var rezultat = printNumLeftAlign([78, 111, 4, 4321]);
console.log (rezultat)
