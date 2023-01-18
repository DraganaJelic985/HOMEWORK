/*5.	Write a function to convert a string to its abbreviated form. 

	"John Snow" -> 	"John S."  */

	function skracivanjeStringa(string){
		var podeljenString = string.split(" ");
		var zadnjaRec = podeljenString[podeljenString.length-1].split("");
		zadnjaRec.splice(1, zadnjaRec.length-1, ".").join("");
		podeljenString[podeljenString.length-1] = zadnjaRec.join("")
		return podeljenString.join(" ");
	}
console.log (skracivanjeStringa("John Snow"))


    