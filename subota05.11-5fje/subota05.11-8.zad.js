/*8.	Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB
*/
function noviString(string){
    var split= string.split("");
    var newA = split.reverse();
    return newA.join('')
}
var rezultat= noviString(" Belgrade Institute of Technology")
console.log(rezultat)