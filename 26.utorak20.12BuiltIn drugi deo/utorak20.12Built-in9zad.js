/*9.	Write a program that accepts a string as input and swaps the case of each character. 
For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
       var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
       var LOWER = 'abcdefghijklmnopqrstuvwxyz';

"The Quick Brown Fox" -> "tHE qUICK bROWN fOX"  */

function swapsCaseOfEachChar(string){
       debugger;
       var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
       var LOWER = 'abcdefghijklmnopqrstuvwxyz';
       var strArr = string.split ("");
       
for (var i=0; i< strArr.length; i++){
       if (UPPER.includes(strArr[i])){
              var x = UPPER.indexOf(strArr[i]);
              strArr[i] = LOWER[x];

       }
       else if(LOWER.includes(strArr[i])){
              var x = LOWER.indexOf(strArr[i]);
              strArr[i] = UPPER[x];
       }
}

       return strArr.join("");
}
console.log (swapsCaseOfEachChar("The Quick Brown Fox"))


