/*Write a function that reverses a number. The result must be a number.
12345 -&gt; 54321 // Output must be a number*/

function reverseNum (num){
    
   num=num+"";
	return num.split("").reverse().join("");
}
    
var rezultat = reverseNum(12345)
console.log (rezultat)