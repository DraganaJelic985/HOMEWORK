/*2.	Write a function named calculateDogAge that:
	takes 1 argument: your puppy's age.
	calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
	outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.

Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
*/
function calculateDogAge(puppysAge){
    var realAge= puppysAge*7;
    return "Your doggie is " +realAge + " years old in dog years!"
}
var rezultat = calculateDogAge(4)
console.log (rezultat)
var rezultat = calculateDogAge(16)
console.log (rezultat)
var rezultat = calculateDogAge(5)
console.log (rezultat)
//bonus: ovo sam razumela kao da treba da izeacunam 'stopu promene', kako koliko puta smo promenili godine, ali u odnosu na sta,
//ali i ako jeste to, ne znam kako bih izbrojala koliko puta je funkcija izvrsena...??? da li uopste postoji nacin da se to uradi?