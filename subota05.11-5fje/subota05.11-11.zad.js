/*11.	Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true*/

function ifPalindrome( string){
    var splitA= string.split("")
    var reverseA= splitA.reverse()
    var joinA= reverseA.join('')
    string= string.split(' ').join('')
    joinA= joinA.split(' ').join('')
  
if ( joinA == string){
    result = true;
}
else{
    result = false;
}
    return joinA
}
var rezultat= ifPalindrome("eye")
console.log(rezultat)
var rezultat= ifPalindrome("Geek")
console.log(rezultat)
var rezultat= ifPalindrome("a nut for a jar of tuna")
console.log(rezultat)

