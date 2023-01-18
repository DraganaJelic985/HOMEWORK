/*1.	Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

	12345 -> 54321 */

function reverseNumber(num){
	var str = num.toString();
	var reversed = str.split('').reverse().join('')
	var numreversed= Number(reversed)

	return numreversed + '. Tip podatka: '+typeof(numreversed)
}
console.log (reverseNumber(12345))

    