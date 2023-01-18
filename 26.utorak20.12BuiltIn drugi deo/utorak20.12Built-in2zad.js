/*2.	Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Note: Assume punctuation, numbers and symbols are not included in the passed string.

“Webmaster” -> “abeemrstw” */

function lettersInAlphabeticalOrder (string){
    var str = string.toLowerCase().split('');
    var sortedStr = str.sort().join('');
    return sortedStr;
}
console.log (lettersInAlphabeticalOrder("Webmaster"))
