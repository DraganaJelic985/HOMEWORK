/*5.	Write a function to find the position of the first occurrence of a character in a string. 
The result should be the position of character. If there are no occurrences of the character, 
the function should return -1.*/

function prvaPozicijaSlova(string,slovo){
    var index= string.indexOf(slovo,string)
    return index+1
}
var rezultat= prvaPozicijaSlova("My random string","n")
console.log(rezultat)




