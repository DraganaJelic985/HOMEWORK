/*7.	7.	Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]*/

var a=[4, 5, 6, 2];
var b=[3, 8, 11, 9];
var c=[];
var x=0;

for (i=0; i<a.length; i++){
    for(x=0; x<a.length+b.length; x+2){
        c[x]=a[i]
    }
}
    for (j=1; j<=b.length; j++){
        for(x=1; x<=a.length+b.length; x+2){
            c[x]=b[j]
        }
    }

console.log(c)
/*ovo je ideja, ali nece da se pokrene, da bih videla sta da korigujem. Zamisao je da se na svako
drugo mesto dodaje element niza a, pocevsi od indeksa 0, i da se na svako drugo mesto ubacuje
element niza b, pocevsi od indeksa 1. Pri tome da se indeks novog niza povecava za 2, a indeks starih nizova
za po 1*/