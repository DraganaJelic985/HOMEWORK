/* (default is 1,
beginning of a string).
"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"
*/


function insertString (string1, string2,index){
    var newString = Array.from (string1)
    newString.splice(index,0,string2)
    return newString.join('')
}
var rezultat = insertString("My random string", "JS ")
console.log(rezultat)
var rezultat = insertString("My random string", "JS ",10)
console.log(rezultat)

/*var a = ["Joca", "Pera", "Mika", "Žika", "Tika"];

  var rem = a.splice(1,0, "Maca", "Braca");
  console.log (rem)*/

/*function insert(main_string, ins_string, pos) {
    if(typeof(pos) == "undefined") {
     pos = 0;
   }
    if(typeof(ins_string) == "undefined") {
     ins_string = '';
   }
    return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
     }
 console.log(insert('We are doing some exercises.'));
 console.log(insert('We are doing some exercises.','JavaScript '));
 console.log(insert('We are doing some exercises.','JavaScript ',18));*/