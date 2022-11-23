/*10. Write a program to find the most frequent item of an array.
[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]*/


function mostFrequentItem(array){
   var item= "";
   var frequent=0;
   var frequentmax=1;
   for (i=0; i< array.length; i++){
    for (j=i; j<array.length; j++){
        if (array[i]==array[j]) frequent += 1;
        
        if (frequentmax<frequent){
            frequentmax=frequent;
            item= array[i];
        }
    }
    m=0;
   }
return frequentmax +","+ item;
}
/*razumem ovaj primer, ali mi nije jasno zasto kod mene ne funkcionise na isti nacin,
ustvari ne razumem kako je izbrojao 30 brojeva 3, pa ne znam sta da ispravim
I nije mi jasno kako su kod prvog if uslova ostavili brojac van { }*/

//tvoj primer ne radi zbog vise stvari. Prva stvar koja je pogresna jeste sto si postavila promenjive frequent i frequentmax na pogresno mesto.
// obe promenjive treba da se nalaze unutar for petlje, nisam siguran koje for petlje ali svakako unutar. Zasto?
// zato sto evo kreces da je i=0. To je prvi element niza. Dobijas da je frequent = 1. Ne ulazis u frequentmax < frequent. Ides da je j = 1,
// dakle element 'a'. frequent ostaje 1. Vrtis tako dalje j sve dok ne dodjes do kraja, jer ovde neces uci u prvoj iteraciji nikad u frequentmax < frequent.
// idemo dalje, i=1. Ulazis u sledeci for(j=i, dakle j=1). Za i=1 i j=1 ces dobiti da je frequent = 2. Pa sada ulazis prvi put u if(freqnentmax<frequent)
// frequentmax ti se stavlja na 2, ali TO NIJE TACNO. Zasto? Zato sto je to tek prvo pojavljivanje elementa 'a', jer smo na i=1 i j=1.
// Dakle po istoj logici dalje vrtis petlju. Kada dodjes do i=12 i j=12 onda dobijas poslednji frequent da je 30, i dobijas da je to broj 3.
// A vidis i sama golim okom da nije. Dakle, petlja koju si napravila ne valja :)
// Napisi sebi na srpskom bukvalno sad kao ja sto sam ti pisao:
// Idem kroz for petlju, desava se ovo za i = 0 itd. 
// Tako ces sebi razjasniti sta kada treba da se desi. Jasna mi je ideja sta si htela, ali nisi napisala kako si zamislila ;) 

var rezultat = mostFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);
console.log(rezultat) ;

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;

for (var i = 0; i < arr1.length; i++) {
  for (var j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) m++;
    if (mf < m) {
      mf = m;
      item = arr1[i];
    }
  }

  m = 0;
}

console.log(item + " ( " + mf + " times ) ");
