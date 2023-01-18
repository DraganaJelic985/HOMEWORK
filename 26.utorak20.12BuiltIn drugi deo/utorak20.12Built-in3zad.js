/*3.	Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
	
	"Republic Of Serbia" -> "Rbceilpu Of Sabeir" */

function alphabetizeWords(string){
	var nizReci = string.split(' ');
	var noviNizReci = [];
	for (i=0; i<nizReci.length; i++){
		noviNizReci.push(nizReci[i].split('').sort().join('')) 
	}
	return noviNizReci.join(' ');
}
console.log (alphabetizeWords("Republic Of Serbia"))
    