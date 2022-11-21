/*1.	Write a function to check whether the `input` is a string or not.

"My random string" -> true
12 -> false*/

function ifString(a){
    if(typeof (a) == "string"){
        result="true"
    }
    else{
        result="false"
    }
    return result
}
var a =ifString("My random string");
console.log(result)
var a =ifString(12);
console.log(result)
