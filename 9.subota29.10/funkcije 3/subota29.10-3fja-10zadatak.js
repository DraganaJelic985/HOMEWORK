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
