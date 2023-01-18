/*5.	Create a function that validates a password to conform to the following rules:
	Length between 6 and 24 characters,
	At least one uppercase letter (A-Z).
	At least one lowercase letter (a-z).
	At least one digit (0-9).
	Maximum of 2 repeated characters (“aa” is OK, “aaa” is NOT).
	Supported special characters: ! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , .
	Examples:  validatePassword("P1zz@") ➞ false  // Too short.
	validatePassword("iLoveYou") ➞ false      // Missing a number.
	validatePassword("Fhg93@") ➞ true       // OK!
*/
function proveraDuzineSifre(sifra){
var result = "";
    if (sifra.length>=6 && sifra.length<=24){
        result = true;
    }
    else{
        result = false;
    }
    return result;
}
function proveraVelikihSlova(sifra){
    debugger;
    var nizVelikihSlova = 'QWERTYUIOPLKJHGFDSAZXCVBNM'; 
    var result = 0;
    
    for ( i=0; i<sifra.length; i++){
    for ( j=0; j<nizVelikihSlova.length; j++){
        if( sifra[i] == nizVelikihSlova[j]){
            result += 1;
        }
        }
        if(result>0){
            result = true;
            break;
        }
    }
   return result;
}
function proveraMalihSlova(sifra){
    var nizMalihSlova = 'qwertyuioplkjhgfdsazxcvbnm';
    var result = 0;
    for (i=0; i<sifra.length; i++){
    for (j=0; j<nizMalihSlova.length; j++){
        if( sifra[i] == nizMalihSlova[j]){
            result += 1;
        }
    }
    if(result > 0){
        result = true;
        break;
    }
    }
   return result;
}
function proveraBrojeva (sifra){
    var result = "";
    
for(i in sifra){
    for (j=0;j<10;j++){
        if (i == j){  
            result = true;
            break;
        }
        else{
            result = false;
        }
    }
    i++
    if (result == true){
        break;
    }
}
    return result
}
function proveraPonavljanjaKaraktera (sifra){
    var result = "";
//debugger;
    for (var i=0; i< sifra.length; i++){
        if (sifra[i] == sifra[i+1] && sifra [i]==sifra[i+2]){
            result = true;
            break;
        }
        else{
            result = false;
        }
    }
    return result;
}
function proveraSpecijalnihKaraktera (sifra){
    var result = false;
    var specijalniKarakteri = '! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " \' ? < > , .';
    var nizVelikihSlova = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
    var nizMalihSlova = nizVelikihSlova.toLowerCase();
    var nizBrojeva = '0123456789'

    for (i in sifra){
        for (j=0, k=0, l=0, m=0; 
            j<specijalniKarakteri.length, k<nizMalihSlova.length, l<nizVelikihSlova.length, m<nizBrojeva.length; 
            j++, k++, l++, m++){
            if(i == specijalniKarakteri[j]){
                if(i == nizMalihSlova[k]){
                    if (i == nizVelikihSlova){
                        if (i == nizBrojeva[m] ){
                            result = true;
                        }  //sve mi je dobro radilo dok nisam ubacila ove specijalne karaktere
                    }     //a sad kad pogledam u ovoj funkciji su svi uslovi osim broja karaktera pokriveni...
                }        // i suvise sam vremena potrosila na zadatak koji imam uradjen... ali BAS ME NERVIRA... 
            }            //uradicu ga naknadno pa, ako i dalje ne bude islo, trazicu pomoc...
        }     //prvo mi nije bilo jasno da li treba da sadrzi ove karaktere ili ne,sad vise nisam sigurna da sam dobro postavila uslov...
    }
    return result;
}



function validacijaSifre (sifra){
    var proveriDuzinu = proveraDuzineSifre(sifra);
    var proveriVelikaSlova = proveraVelikihSlova(sifra);
    var proveriMalaSlova = proveraMalihSlova(sifra);
    var proveriBrojeve = proveraBrojeva (sifra);
    var proveriPonavljanje = proveraPonavljanjaKaraktera(sifra);
    var proveriSpecijalneKaraktere = proveraSpecijalnihKaraktera(sifra);
    //debugger;
    
    if (proveriDuzinu == false ){
        return "Sifra nije odgovarajuce duzine"
    }
    else if (proveriVelikaSlova == false){
        return "Sifra nema ni jedno veliko slovo."
    }
    else if (proveriMalaSlova == false){
        return "Sifra nema ni jedno malo slovo"
    }
    else if (proveriBrojeve == false){
        return "Sifra ne sadrzi ni jedan broj."
    }
    else if (proveriPonavljanje == true){
        return "Sifra ne sme imati tri ista uzastopna karaktera."
    }
    else if (proveriSpecijalneKaraktere == false){
        return "Sifra ne sadrzi specijalne karaktere."
    }

    else {
        return "Sifra je validna!"
    }
}
var rezultat = validacijaSifre ('P1zz@');
console.log (rezultat)
var rezultat = validacijaSifre ('iLoveYou');
console.log (rezultat)
var rezultat = validacijaSifre ('Fhgvf93@fgdf');
console.log (rezultat)



// Koraci za pravljenje funkcije za validaciju sifre:
// 1. Validacija da je password duzine od 6 do 24 karaktera (pomocu IF-a);
// 2. Validacija da li postoji bar jedan uppercase karakter (pomocu for in ili for petlje, uz pomoc .toUppercase ugradjene funkcije)
// 3. Isto kao korak 2 ali za lowercase karakter.
// 4. Isto kao koraci 2 i 3, s tim da ovde proveravate za brojeve.
// 5. Provera npr. kroz for ili for in petlju; ako se i-ti karakter ponavlja u i+1 i u i+2 onda je password nevalidan
// pass w ord => proveravamo npr slovo w
// w: i-ti karakter;
// o: i+1 karalter;
// r: i+2 karakter;
// 6. Umesto for in iskorisiti for ili while petlju uz modifikaciju postojeceg koda; izmeniti specijalne karaktere (izbaciti npr @)
// za proveru tacnosti


function checkLength(password) {
    var resultMessage = "Lenght must be between 6 and 24 characters!";
    if(password.length < 6 || password.length > 24) {
        console.log(resultMessage);
        return false;
    } else {
        return true;
    }
}

function checkUppercase(password) {
    var resultMessage = "Password must contain at least one upper case letter!";
    var containsUppercase = !!/[A-Z]+/.exec(password);

    if(containsUppercase) {
        return true;
    } else {
        console.log(resultMessage);
        return false;
    }
}

function checkLowercase(password) {
    var resultMessage = "Password must contain at least one lower case letter!";
    var containsLowercase = !!/[a-z]+/.test(password);

    if(containsLowercase == false) {
        console.log(resultMessage);
    } 

    return containsLowercase;
}

function checkNumber(password) {
    var resultMessage = "Password must contain at least one number!";
    var containsNumber = !!/[0-9]+/.test(password);

    if(!containsNumber) {
        console.log(resultMessage);
    }

    return containsNumber;
}

function checkRepetition(password) {
    var resultMessage = "Password must not contain repetition of 3 characters in a row!";
    var checkRepetition = !!/(.)\1{2,}/.exec(password); 

    if(checkRepetition) {
        console.log(resultMessage);
    }

    return checkRepetition;
}

function checkSpecialCharacters(password) {
    var resultMessage = "Password contains unsupported characters!";
    var specialCharacters = '! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " \' ? < > , .';
    var notSupportedSpecial = false;


    for(character in password) {
        if(!specialCharacters.includes(password[character]) && !password[character].match(/[a-z]/i) && isNaN(parseInt(password[character]))) {
            notSupportedSpecial = true;
        }
    }

    if(notSupportedSpecial) {
        console.log(resultMessage);
    }

    return notSupportedSpecial;
}



function validatePassword(password) {
    var checkLengthOfPassword = checkLength(password);
    var checkUppercasePassword = checkUppercase(password);
    var checkNumberPassword = checkNumber(password);
    var checkRepetitionPassword = checkRepetition(password);
    var checkSpecialCharacterPassword = checkSpecialCharacters(password);
    // var functionIsValid = false;
    var successfullPassword = "Password is not valid!";

    if(checkLengthOfPassword == true && checkUppercasePassword == true && checkLowercase(password) == true
     && checkNumberPassword && !checkRepetitionPassword && !checkSpecialCharacterPassword) {
        //functionIsValid = true;
        successfullPassword = "Password is valid.";
    } 

    // return functionIsValid;
    return successfullPassword;
}

//console.log(validatePassword("Password1TTt$"));
