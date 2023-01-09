/*3.	Write a function named calculateSupply that:
	takes 2 arguments: age, amount per day.
	calculates the amount consumed for rest of the life (based on a constant max age).
	outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.

Bonus: Accept floating point values for amount per day, and round the result to a round number.*/


function calculateSupply (age, amountPerDay){
    var maxAge = 65;
    var restAGE = maxAge - age;
    var amountForRest =restAGE*amountPerDay*365


    return "You will need "+ Math.round(amountForRest) +" to last you until the ripe old age of " +maxAge
}
var rezultat = calculateSupply(60, 1000)
console.log (rezultat)
var rezultat = calculateSupply(60, 999.99)
console.log (rezultat)
var rezultat = calculateSupply(60.5, 10.22559)
console.log (rezultat)