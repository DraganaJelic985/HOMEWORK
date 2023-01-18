/*7.	Write a function to capitalize the first letter of a string and returns modified string.

"js string exercises" -> "Js string exercises"  */

function capitalizeFirstLetter (string){
    var newStr = string.split("");
    newStr[0] = string[0].toUpperCase()

    return newStr.join('');
}
console.log (capitalizeFirstLetter("js string exercises"))

