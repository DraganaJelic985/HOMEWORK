/*6.	Create a function that finds how many prime numbers there are, up to the given integer.
Examples: primeNumbers(10) ➞ 4   // 2, 3, 5 and 7
primeNumbers(20) ➞ 8    // 2, 3, 5, 7, 11, 13, 17 and 19
primeNumbers(30) ➞ 10    // 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29
*/
function countPrimeNumbers(integer){
  //  debugger;
    var counter = 0;
    var primeNumbers = [];

    for (var i = 1; i<=integer; i++){
        for (var j = 1; j<=integer; j++){
            if (i%j == 0){
            counter += 1;
            }
        }
    if (counter ==2){
        primeNumbers.push (i)
    }
    counter = 0;
}
    return 'primeNumbers('+integer+') ➞ '+ primeNumbers.length + " //  "+primeNumbers
}
var rezultat = countPrimeNumbers (10);
console.log (rezultat)
var rezultat = countPrimeNumbers (20);
console.log (rezultat)
var rezultat = countPrimeNumbers (30);
console.log (rezultat)

