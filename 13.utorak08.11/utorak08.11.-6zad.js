/*6.	Napisati funkciju koja vraća medijanu niza. (Medijana je “srednji” broj niza kada su brojevi poređani od najmanjeg
     do najvećeg ako niz ima neparan broj elemenata. Ako ima paran broj onda se medijana definiše kao aritmetička sredina 
     dve srednje vrednosti). */

function medijanaOfArray(array){

var medijana = 0;
var indexMedijane=0;
//prvo poredjam brojeve
array.sort(function(a, b){return a - b}) //ovo sam koristila sa Sasom, jasan mi je sistem,
                                        //a u prethodnom domacem sam uspela i da sortiram niz bez ovoga,
     if (array.length%2 != 0) {          //pa mi je bilo svejedno sta cu napisati.
          indexMedijane= parseInt(array.length/2)
          medijana = array[indexMedijane]
     } 
     else{
          indexMedijane = array.length/2-1;
          medijana = (array[indexMedijane]+array[indexMedijane+1])/2
     }                           
                                  


     return medijana;
}
var rezultat = medijanaOfArray([5, 4, 2, 1, 3, 6,7,8,9])
console.log (rezultat)
var rezultat = medijanaOfArray([5, 6, 2, 1, 3, 4])
console.log (rezultat)