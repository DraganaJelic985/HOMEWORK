/*4.	Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2*/

function brojacSlova(string, slovo) 
{
 var n = 0;
 for (index = 0; index < string.length; index++) 
 {
    if (string.charAt(index) == slovo) 
      {
      n += 1;
      }
  }
  return n;
}
var brojSlova= brojacSlova("My random string", "m")
console.log(brojSlova);
