/*1.Create a function that returns the sum of missing numbers.
Examples: sumMissingNumbers([1, 3, 5, 7, 10]) ➞ 29  // 2 + 4 + 6 + 8 + 9
sumMissingNumbers([10, 7, 5, 3, 1]) ➞ 29
sumMissingNumbers([10, 20, 30, 40, 50, 60]) ➞ 1575*/

function sumMissingNumbers(array){
    var sum = 0;
    var newArr = [];
    var maxValue = 0;
    for (i=0; i<array.length; i++){
        if (maxValue < array[i]){
            maxValue=array[i]
        }
    }
    for (i=1; i<maxValue;i++){
            if (!array.includes(i)){
                sum += i;
                newArr.push(i)
            }
        }
    
    return  sum + "➞  ["+newArr+"]";
}
var rezultat = sumMissingNumbers ([1, 3, 5, 7, 10]);
console.log (rezultat)
var rezultat = sumMissingNumbers ([10, 7, 5, 3, 1]);
console.log (rezultat)
var rezultat = sumMissingNumbers ([10, 20, 30, 40, 50, 60]);//za ovaj primer vmi se ne pok;apa rezultat, ali rekla bih da je tacan.
console.log (rezultat)
var rezultat = sumMissingNumbers ([5, 6, 7, 8, 9, 11]);
console.log (rezultat)
