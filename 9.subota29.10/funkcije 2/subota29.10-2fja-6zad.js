/*6.	Write a function to find the position of the last occurrence of a character in a string. 
The result should be in human numeration form.
 If there are no occurrences of the character, function should return -1.*/

function poslednjaPozicijaSlova(string,slovo){

    var index= string.lastIndexOf(slovo,string)
    return index+1
}

   /* for ( var i=0; i<string.lenght ; i++){
        if(string[i]===slovo){
        index = i+1
    
    }
}*/

/*while (index<string.length){
    if (string[index]===slovo){
        console.log( index) 
        index++
    }
}

}*/
var rezultat= poslednjaPozicijaSlova("My random string", "n")
console.log(rezultat)

/*string="My random string"
slovo="n"
index = 0;
while (index<string.length){
console.log(string.indexOf(slovo, string)+1)
index++}*/

