/*1. Write a function that checks if a given string contains 5 digits.
Input: “1b8952abd” 
Output: true
    1A. Modify previous task to check if it contains char or number "5". 

Input: “1bser9re”
Output: false*/

function chackNumbers (string){
    var arr= Array.from (string, Number)
    var brojac = 0;
   for (i=0; i<arr.length; i++){
       if ( isNaN(arr[i]) != true){
       brojac += 1

       }
   }
    if( brojac == 5){
        return true
    }
    else{
        return false
    }
    
}
var rezultat = chackNumbers("1b8952abd");
console.log (rezultat)
var rezultat = chackNumbers("1b89528bd");
console.log (rezultat)
var rezultat = chackNumbers("1b952abd");
console.log (rezultat)

//1A
function chackNumbers1 (string, num){
    var arr= Array.from (string, Number)
    var brojac = 0;
   for (i=0; i<arr.length; i++){
       if ( arr[i] == num){
       brojac += 1
       }
   }
    if( brojac > 0){
        return true
    }
    else{
        return false
    }
}
var rezultat = chackNumbers1("1b8952abd",5);
console.log (rezultat)
var rezultat = chackNumbers1("1bser9re",5);
console.log (rezultat)

