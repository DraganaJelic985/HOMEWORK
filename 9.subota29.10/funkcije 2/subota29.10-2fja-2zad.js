/*2.	Write a function to check whether a string is blank or not.

"My random string" -> false
" " -> true
12 -> false
false -> false
*/

function ifBlank(a){
    if(a == " "){
        result="true"
    }
    else{
        result="false"
    }
    return result
}
var a =ifBlank("My random string");
console.log(result)
var a =ifBlank(" ");
console.log(result)
var a =ifBlank(12);
console.log(result)
var a =ifBlank("false");
console.log(result)
