/*7.	Write a program that takes as input a city name and outputs the country where the city is. 
You may choose which cities and countries you want to output yourself, however there has to be at least 5 countries 
and 15 cities. Note that each country must have a different number of cities. 
Input different from the listed cities should output a message"Please choose a different city".*/

var sity= "Kragujevac";
var result="";

switch (sity){
    case "Beograd":
    case "Cacak":
    case "Kragujevac":
        result= "Ovo je grad u Srbiji";
        break;
    case "Podgorica":
    case "Bar":
    case "Kotor":
        result=" ovo je grad u Crnoj Gori"
        break;
    case "Zadar":
    case "Zagreb":
    case "Split":
        result="Ovo je grad u Hrvatskoj"
        break;
    case "Visegrad":
    case "Mostar":
    case  "Sarajevo":
        result="Ovo je grad u Bosni i Hercegovini"
        break;
    case "Pariz":
    case "Kan":
    case "Nica":
        result="Ovo je grad u Francuskoj"
        break;
    default:
        result="Izaberite drugi grad"
}
console.log (result)