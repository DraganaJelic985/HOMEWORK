/*7.	Write a program that calculates a number of digits of a given number. */


function digitsNo(num){
var n=1;  //ovde sam stavila 1 zato sto cifra jedinica podeljena sa 10 daje manje od 1
            //ali to nije ispravno, jer ce pokazivati jedan ako mu upisem bilo sta...
            //mogla sam da uradim i kao treci zadatak, ali sam htela da probam nesto drugo...
 while (num/10>=1){
    num /=10;
    n+=1;
 }
 return n
}
console.log (digitsNo(13546))
console.log (digitsNo(123))
console.log (digitsNo(0.123))
console.log (digitsNo("rrertrt"))