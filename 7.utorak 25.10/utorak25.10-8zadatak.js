/*8.	Write a program that calculates a number of appearances of a given number in a given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3
*/
function brojPonavljanja(a,e){
    var result=0;

    for (i=0; i<a.length; i++){
    if (a[i]==e){
        result += 1
    }
}
return "Broj"+ e + " se u datom nizu ponavlja "+ result + " puta."
}
var rezultat=brojPonavljanja( [2, 4, 7, 8, 7, 7, 1],7);
console.log(rezultat)
var rezultat=brojPonavljanja( [2, 4,2, 8, 2, 7, 2],2);
console.log(rezultat)