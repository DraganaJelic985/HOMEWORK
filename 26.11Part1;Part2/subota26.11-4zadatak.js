/*4. Write a function that deletes a character from the given position in the string. 
Input: “Goodd morning!”, 3 
Output: “Good morning!” */

function deleteCharacter(string, position){
    var arr = Array.from (string);
    arr.splice(position,1);
    return arr.join('')
}
var rezultat = deleteCharacter("Goodd morning", 3 )
console.log( rezultat)
