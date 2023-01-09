/*4.	Create a function called celsiusToFahrenheit:
	Store a celsius temperature into a variable.
	Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:
	Now store a fahrenheit temperature into a variable.
	Convert it to celsius and output "NN°F is NN°C."
*NN is actual temperature you need to convert
*/
function celsiusToFahrenheit (celzijusi){
    var fahrenheit= 1.8*celzijusi+32;
    return celzijusi+"°C is "+fahrenheit.toFixed(2)+"°F."
}
var rezultat= celsiusToFahrenheit(32)
console.log(rezultat)

function fahrenheitToCelsius (fahrenheit){
    var celzijusi=(fahrenheit-32)/1.8
    return fahrenheit+"° is "+celzijusi.toFixed(2)+"°C."
}
var rezultat= fahrenheitToCelsius(89.6)
console.log(rezultat)




//F = 1,8 C + 32
//C = (F-32)/1.8