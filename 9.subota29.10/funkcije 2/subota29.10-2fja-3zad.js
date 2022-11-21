/*3.	Write a function that concatenates a given string n times (default is 1).
	"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"*/

function repeat(string, n) {
    string=new Array(n + 1).join(string) //nije mi bas potpuno jasna ova funkcija, zasto n+1 i zasto join(string),
  return string;                         //ali zakovala sam, samo se oko ovoga vrtim...
    }

var noviString= repeat("Ha",3)
console.log(noviString)