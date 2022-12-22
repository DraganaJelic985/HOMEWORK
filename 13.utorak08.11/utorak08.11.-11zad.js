/*11.	Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
*/
function pronadjiNajduzuRec(words){
    var maxLength = 0;
    for (i=0; i<words.length;i++){
        if(words[i].length>maxLength){
            maxLength=words[i].length;
        }
    }
    return maxLength;
}
function ispisiPrviZadnjiRed(maxLength){
 var result = "";
 for (i=0; i<maxLength; i++){
    result += "*";
 }
 return result;
}

function ispisivanjeReci (rec,duzinaKocke){
    var result = "* "+rec
    for (i=rec.length; i<duzinaKocke-4; i++){
        result +=" ";
    }
    return result+" *";
}


function ispisivanjeReciURamu(words){
var duzinaKocke = pronadjiNajduzuRec(words)+4 ;

var prvizadnjiRed = ispisiPrviZadnjiRed(duzinaKocke) +'\n' ;

var recIzvezdice= " ";
for (j=0; j<words.length; j++){
    recIzvezdice += ispisivanjeReci (words[j],duzinaKocke)+'\n'
}
 //uvlaci mi prvu rec za jendno prazno mesto
 //ne znam zasto,         
    return prvizadnjiRed + recIzvezdice + prvizadnjiRed
}
var rezultat = ispisivanjeReciURamu(["Hello", "Woooorld", "in", "a", "frame", "gdfthfthfgyg"])
console.log(rezultat)

// 1. Naci najduzu rec u nizu;
// 2. Naci nacin kako da ispisemo prvi i poslednji red (koristiti '\n' za prelazak u novi red);
// 3. Prvi red ispisati van petlje, poslednji niz ispisati van petlje
// 4. Unutar same petlje - Duzina najduze reci minus konkretna rec predstavlja broj razmaka unutar kvadrata koji ispisujemo
// 4a. * + razmak + sama rec + ispis iz koraka 4. + razmak + * + '\n' jer zelimo da se prebaci u novi red
// 5. Vracamo rezultat;
// 6. Pozivamo funkciju i prikazujemo rezultat pomocu konzol loga.



/*function addStars(str, maxLength) {
    var result = '*';
    result += ' ' + str;
    
    for (var i = 0; i < (maxLength - str.length - 4); i++) {
    result += ' '
    }
    
    return result + ' *';
    }
    function addHeaderAndFooter(maxLength) {
    var result = '';
    for (var i = 0; i < maxLength; i++) {
    result += '*'
    }
    
    return result;
    }
    
    function writeWordsInAFrame(input) {
    if (!input || input.length < 1) {
    return input;
    }
    
    var result = ''
    var maxLength = 0;
    for (var i = 0; i < input.length; i++) {
    var wordLength = input[i].length;
    if (wordLength > maxLength) {
    maxLength = wordLength;
    }
    }
    
    maxLength += 4;
    var header = addHeaderAndFooter(maxLength);
    result = header + '\n';
    for (var i = 0; i < input.length; i++) {
    result += addStars(input[i], maxLength) + '\n'
    }
    
    result += header;
    return result;
    }
    console.log(writeWordsInAFrame(["Hello", "World", "in", "a", "frame", "Pera1232333333"]));*/
    
    
    