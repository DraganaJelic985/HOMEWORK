/*10.	Write a program that calculates the number of appearances of a letter a in a given string. 
Modify the program so it calculates the number of both letters a and A.*/

function letterInString(string,letter){
    var brojac=0;
    
    for (i=0; i<string.length; i++){
        if (string[i]==letter){
            brojac += 1;
        }
    }
    return "Slovo "+letter + " se  u datom stringu pojavljuje "+ brojac + " puta."
}
var rezultat= letterInString("AAABBBaaabbb","a")
console.log (rezultat)

function iZaVelikaSlova (string, letter){
    var brojac = 0;
    var str = string.toLowerCase();

    for (i=0; i<str.length; i++){
        if (str[i]==letter){
            brojac += 1;
        }
    }
        return "Slovo "+ letter + " se  u datom stringu pojavljuje "+ brojac + " puta,kao veliko i malo."
} 
var rezultat1 = iZaVelikaSlova("AAABBBaaabbb","a")
console.log(rezultat1)