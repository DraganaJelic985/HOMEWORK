/*6.	Write a program that uses a loop to add all the even numbers from 1 to 1000 and 
subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 
and displayed in console.
Output: 2350000*/

function complicatedSum() {
    var sumOdd = 0; 
    var sumEven = 0; 
    var result = 0;
    for (i = 0; i <= 500; i++) {
        if (i % 2 != 0) {
            sumOdd += i;
        }
    }
    for (i = 0; i <= 1000; i++) {
        if (i % 2 == 0) {
            sumEven += i;
        }
    }
    result = (sumEven - sumOdd) * 12.5;
    return result;
}
var rezultat = complicatedSum();
console.log(rezultat);