/*11.	Write a program that concatenates a given string given number of times.
 For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. */

function concatenatesString(string, num){
   string=new Array(num + 1).join(string)
   return string;                          //uradila po primeru sa neta, ali ne kontam bas skroz
     }                                     //ovo new Array, pravi novi niz, ali zasto num+1,
                                           //pokusala sam sa for petljom, da doda na kraj niza sa .push, ali nesto nije islo...
 var rezultat= concatenatesString("abc",3)
 console.log(rezultat)


