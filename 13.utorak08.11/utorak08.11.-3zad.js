/*3.	Write a program that prints a multiplication table for numbers up to 12.*/

function tablicaMnozenja(zadnjiBroj){

var result=0;
var izlaz = "";

for (i=1; i<=zadnjiBroj; i++){
    for (j = 1; j<=zadnjiBroj; j++){
        result = i*j;
        izlaz += i+"*"+j+"="+result + "\n";
    }
} 
    return izlaz         
}

var rezultat = tablicaMnozenja (12);
console.log(rezultat)