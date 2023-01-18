/*5.	Write a function that returns a function that calculates a decimal value of the given octal number. 
Input: 034
Output: 28
*/
function spoljnaFunkcija(parametar){
    console.log ("oktalni broj "+ parametar+" pretvoren u decimalnu vrednost iznosi: ")
function decimalToOctal (octalValue){
        var octalArr = octalValue.toString()
        var decimalValue = 0; 
        var j = 0;
    for ( var i = octalArr.length-1; i>=0; i--){    
        decimalValue += octalArr[i]*Math.pow(8, j);
        j++
    }
    return decimalValue; 
}
return decimalToOctal(parametar)
}
var rezultat = spoljnaFunkcija(34);
console.log (rezultat)

//ako se izostavi nula na pocetku oktalnog broja, ovo radi, ali ako je upisem, oktalni broj se
//automatski pretvara u decimalni. Ne znam kako bih to sprecila.
//s'obzirom da se to desava automatski, ova funkcija mi i ne treba.

