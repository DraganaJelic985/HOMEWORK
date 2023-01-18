/*6.	Write a function that adds string to the left or right of string, by replacing it’s characters.

	'0000', ‘123’, 'l' -> '0123'
'00000000', ‘123’, 'r' -> '12300000'  */

function addingString (str1, str2, side){
	var arr1 = str1.split('');
	var arr2 = str2.split('');
	var newStr = [];

	if(side =="l"){
		newStr = arr1.splice(arr1.length-arr2.length, arr1.length, str2)
	}
	else if (side == "r"){
		newStr = arr1.splice(0,arr2.length,str2)
	}
	else{
		console.log("Niste dobro uneli stranu")
	}
	return arr1.join('');
}
console.log (addingString('0000', '123', 'a')) 
console.log (addingString('0000', '123', 'l')) 
console.log (addingString('00000000', '123', 'r')) 
