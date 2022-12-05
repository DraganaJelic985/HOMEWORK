/*12.	Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor 
of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9
*/

function greatestDiversor( a,b){
    var result="";
    for(i=1; i <=b; i++){       //ova petlja ide samo do broja b, a on je manji od a u oba slucaja...
        if(a%i==0 && b%i==0){   //a mozda i nema veze bitno je da ide do kraja jednog od ova dva broja, da li do veceg ili manjeg, mislim da nije bitno
        result= i               
    }
}
    return result
}
var rezultat = greatestDiversor(9, 81)
console.log(rezultat)
var rezultat = greatestDiversor(192, 42)
console.log(rezultat)
var rezultat = greatestDiversor(192, 192)
console.log(rezultat)
