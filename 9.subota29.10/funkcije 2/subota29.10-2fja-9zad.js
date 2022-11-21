/*9.	 Write a function that replaces spaces in a string with provided separator. 
If separator is not provided, use “-” (dash) as the default separator.

    "My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string"
*/

function separatorInString(string){
    var niz =Array.from(string) 
    for (i=0; i<niz.length; i++){
        if (niz[i]== " "){
    niz.splice(niz.indexOf(" "), 1, "_")  //za ostala dva primera samo menjam znak kojim menjam razmak
        }
    }
    return niz.join('')
}

var niz=separatorInString("My random string")
console.log (niz)

var niz=separatorInString("Random")  
console.log (niz)

