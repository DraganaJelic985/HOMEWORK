/*5.	Write a program which prints the elements of the following array as a single string.

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];*/

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

for (i=0;i<x.length; i++){
    console.log(x[i])
    }


// Komentar: ovde treba da prodjes kroz ceo niz i da ga ispises u jednom redu kao string
// Dakle, imas dodatnu promenjivu u kojoj cuvas trenutni string
// nakon svake iteracije kroz petlju ti ces toj promenjivoj dodavati po jos jedan element niza
// tako dobijas krajnji string :) 
