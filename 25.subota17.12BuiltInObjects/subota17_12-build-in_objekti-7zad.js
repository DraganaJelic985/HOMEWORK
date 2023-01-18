/*7.	a.	Write a function that checks if a given string is written in all capitals.*/
function chackCapitals (string){
    var result = "";
  
for (var i=0; i<string.length; i++){
    if (!!/[A-Z]/.exec(string[i])){
        result= true;
    }
    else{
        result= false;
        break;
    }
}
return result;
}
var rezultat = chackCapitals("FGDFdfklsdkdDSKLDFJlj")
//console.log (rezultat)
var rezultat = chackCapitals("DFJHSDKG")
//console.log (rezultat)

/*b.	Write a function that checks if a given string contains any digits.*/
function chackDigits (string){
    var chackString = !!/[0-9]+/.test(string)
    return chackString;
}
var rezultat = chackDigits("dfklsd8kdDSKLDFJlj")
//console.log (rezultat)

/*c.	Write a function that checks if a given string is a valid hexadecimal color.*/
function chackHexadecColor(string){
var result = "";

if (string[0] == "#" && string.length == 7){
    for( var i = 1; i<string.length; i++){
        if(!!/[0-9]+/.test(string[i]) || !!/[a-f]+/.test(string[i])){
            result = true;
        }
        else{
            result = false;
            break;
        }
    }
}
else{
    result = false;

}
    return result;
}
var rezultat = chackHexadecColor("#gggggd");
//console.log (rezultat)
var rezultat = chackHexadecColor("#aa63f6");
//console.log (rezultat)

/*d.	Write a function that checks if a given number belongs to the interval from 1900 to 2018. */
function chackNumInterval (num){
var min = 1900;
var max = 2018;
var result="";

if (num >=min && num < max){
    result = true;
}
else{
    result = false
}
return result;
}
var rezultat = chackNumInterval(500)
//console.log (rezultat)
var rezultat = chackNumInterval(2000)
//console.log (rezultat)
var rezultat = chackNumInterval(3000)
//console.log (rezultat)

/*e.	Write a function named validator that returns an object with properties stringValidator, passwordValidator,
 colorValidator, and yearValidator referencing the functions from a) to d).*/

function Validator(str1, str2, str3, num){
    this.stringValidator = chackCapitals(str1),
    this.passwordValidator = chackDigits(str2),
    this.colorValidator = chackHexadecColor(str3),
    this.yearValidator = chackNumInterval(num)
}
var validaror1 = new Validator("DFHSDJKH", "DFJHJF584", "#1155ff",1999);
console.log (validaror1)

