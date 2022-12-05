/*8.	Kreirati funkciju koja ulazni niz deli u podnizove duzine N i ispisuje ih.
Primer 1: ([2, 3, 4, 5],  N=2) => [[2, 3], [4, 5]] 
Primer 2: ([2, 3, 4, 5, 6], N=3) => [[2, 3, 4], [5, 6]]*/

function podelaNiza ( niz, n){
 var noviNiz = [];
var duzinaNiza = niz.length;
var brojPodnizova = parseInt(duzinaNiza/n);
    for (i = 0; i<duzinaNiza; i += n){
        if(i<brojPodnizova*n){
            noviNiz.push(niz.slice(i,n+i))
            console.log(niz.slice(i,n+i))      //ovaj me je namucio, dok sam skontala kako da postavim uslov...
        }                                      //krenula sam od for-if-for-if-else petlje, dok nisam skontala da je vecina napisanog suvisna...
        else{                                       // nadam se da je dobro uradjen,inace...
            noviNiz.push(niz.slice(brojPodnizova*n,duzinaNiza))
            console.log(niz.slice(brojPodnizova*n,duzinaNiza))
        }
    }
    return noviNiz 
}
var rezultat = podelaNiza([2, 3, 4, 5], 2);
console.log(rezultat)
var rezultat = podelaNiza([2, 3, 4, 5, 6], 3);
console.log(rezultat)