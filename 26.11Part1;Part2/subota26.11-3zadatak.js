/*3. Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’ 
Output: “Good morning” */

function insertCharacter(string, position,char){
    var arr = Array.from (string);
    arr.splice(position-1,0,char);
    return arr.join('')
}
var rezultat = insertCharacter("Goo morning", 4, 'd' )
console.log( rezultat)
