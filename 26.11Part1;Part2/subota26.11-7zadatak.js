/*7. Write a function that checks if every element of the first array is contained in the second array. Be careful with repetitions! 
Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
Output: true*/

function checkRepetitions (niz){
    var newarr=[];

    for (i=0; i<niz.length; i++){
        for (j=0; j<niz.length; j++){
            if(niz[i]==niz[j] && i!=j){
                newarr.push (niz[i])
            }
        }
    }
    return newarr;
}
    console.log (checkRepetitions([8, 9, 3, 1, 11, 4, 3]))
    console.log (checkRepetitions([3, 4, 1, 3]))
/*if (checkRepetitions([3, 4, 1, 3]) == checkRepetitions([8, 9, 3, 1, 11, 4, 3])){
    console.log ('ista ponavljanja')
}
else{
    console.log('nisu ista')
}*/

function checkElementsInArrays(arr1,arr2){
    var result='';
    var result1 = '';
    var brojac = 0;

for (i=0; i<arr1.length; i++){
        if (arr2.includes(arr1[i])){
            result = true;
            brojac +=1;
        } 
    }
    if (brojac == arr1.length) {
      //  if (checkRepetitions(arr1) == checkRepetitions(arr2)){
        result1 = true;
    }
    else{
        result1 = false;
    }
//}
   return brojac + 'puta - '+result1;

}

var rezultat = checkElementsInArrays([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]);
console.log(rezultat)
var rezultat = checkElementsInArrays([3, 4, 1], [8, 9, 3, 1, 11, 4]);
console.log(rezultat)
/*ne znam kako bih ukljucila ponavljanja! Napravila sam funkciju koja bi proverila da li se neki clan niza ponavlja, i pokusala da izjednacim ponavljanja, 
ali i ako su rezultati te funkcije isti za oba niza, nece da ih izjednaci. Pri tome, ni to ne bi funkcionisalo ukoliko u drugom nizu ima, npr. tri trojke. 
Morala bih da nadjem koji element niza se ponavlja i da proverim da li se on ponavlja i u drugom nizu isto puta,
 a da pritom iskljucim ako se ponavlja vise puta nego u prvom nizu... a trenutno nemam mozga da sve to uklopim u celinu...
Tako da cu ovaj zadatak ostaviti kao nesto sto nisam uspela da uradim....*/

