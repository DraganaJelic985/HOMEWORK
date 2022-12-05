/*1.	 Napisati funkciju u JavaScript-u koja na osnovu niza 6 različitih citata i autora, ispisuje na stranici po jedan citat, 
ali tako da se citat promeni kada se program pokrene.
arr="1. citat"-autor,"2. citat"-autor,"3. citat"-autor,"4. citat"-autor,"5. citat"-autor,"6. citat"-autor,*/

/*function citati(arr){
var prikazi
    return
}

var rezultat= citati(["1. citat-autor","2. citat-autor","3. citat-autor","4. citat-autor","5. citat-autor","6. citat-autor"])*/

function randomPrint(arr) {
    var x = Math.round(Math.random() * (6 - 1) + 1);
    switch (x) {
        case 1 : console.log(arr[x-1]);
        break;
        case 2 : console.log(arr[x-1]);
        break;
        case 3 : console.log(arr[x-1]); //ovo je izbunario Sasa, kontam ja da to radi,
        break;                             // ali ne znam kako bih objasnila sebi funkcionisanje ovih ugradjenih funkcija recima
        case 4 : console.log(arr[x-1]);   //i zasto smo napisali za indeks x-1(ne moze da pocne od 0, nema zadat case za 0)?
        break;                              //funkcionise i sa x, pa me zato zanima...
        case 5 : console.log(arr[x-1]);
        break;
        case 6 : console.log(arr[x-1]);
        break;
    }
    return x;
}
var sprovedi = randomPrint(["Prvi autor; prvi citat", "Drugi autor; drugi citat", "Treci autor; treci citat",
"Cetvrti autor; cetvrti citat", "Peti autor; peti citat", "Sesti autor; sesti citat", ]);
console.log(sprovedi);