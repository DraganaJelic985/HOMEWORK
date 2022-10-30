/*8.	Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]*/

var a= [4, 5, 6, 2];
var b= [3, 8, 11, 9];

var c=[a + a.push(b)]

/*ovo je najblize sto sam dosla u odnosu na resenje
predpostavljam da je ova petica na kraju broj elemenata novog niza, 
jer mi se u prethodnim pokusajima samo tako javljala(4 + b niz)
novi niz svakako nema 1 element, a meni se tako pokazuje kad pokrenem program*/

console.log(c)