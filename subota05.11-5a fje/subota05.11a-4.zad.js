/*4.	Kreirati funkciju koja prihvata array, a na izlazu ispisuje niz koji sadrži tipove podataka pojedinačnih elemenata ulaznog niza.*/


function odrediTipPodatka(niz){
var newArr = [];
    for (i=0; i<niz.length; i++){
        newArr.push (typeof(niz[i]))
    }


return newArr
}
var rezultat = odrediTipPodatka(["dkj", 12, [1, 2, 3], true, undefined, null] )
console.log (rezultat)