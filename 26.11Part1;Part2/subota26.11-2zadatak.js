/*Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!”*/

function replaseString(string){
    var newStr = string.split(" ");
    for(i = 0 ; i<newStr.length; i++){
        if ( newStr[i]=="JS"){
        newStr[i] = "**"
        }
    }   
    return newStr.join(' ')
}
var rezultat = replaseString ("Programming in JS is super interesting!")
console.log (rezultat)