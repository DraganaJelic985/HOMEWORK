/*6.	Kreirati funkciju koja prima string a kao rezultat ispisuje niz koji u sebi ima:
 dužinu stringa, prvi karakter stringa, poslednji karakter, središnji karakter ako string ima neparan broj znakova 
 odnosno središnja dva karaktera ako ima paran broj znakova, 
 indeks drugog ponavljanja drugog karaktera u formatu “@ Index # ” ili “not found” ako nema ponavljanja.
Primer 1: "Computer" => [8, "C", "r", "pu", "not found"] , 
Primer 2: “Science" => [7, "S", "e", "e", "@ index 5"]*/

function sredinaStringa (string){
    var duzina = string.length
    var strS = '';
    if (duzina%2 == 0){
        strS = strS + string[duzina/2-1]+string[duzina/2]
    }
    else{
        strS = string[(duzina+1)/2-1]
    }
    return strS
}

function drugoPonavljanje (string){
    var index2 = 0;
    for (i = 2; i< string.length; i++){
        if (string[1] === string[i]){
            index2 = "@ index "+i;
            break;
        }
        else {
            index2 = ' not found';
        }
    }
    return index2
}
function karakteristikeStringa (string){
    var duzina = string.length;
    var str1 = string[0];
    var strZ = string[string.length-1];
    var strS = sredinaStringa (string);
    var index2 = drugoPonavljanje(string);
    
    return'['+duzina+','+str1+','+ strZ + ','+ strS+','+ index2+'.]'
}
var rezultat = karakteristikeStringa("Computer");
console.log(rezultat)
var rezultat = karakteristikeStringa("Science");
console.log(rezultat)
//resenje mi je bez navodnika, mogla sam da ih dodam , ali me zanima da li bi trebalo da ih ispisuje program ili da ih ja dodajem 'peske'?