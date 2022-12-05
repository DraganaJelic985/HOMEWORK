/*10.	Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false*/

function prime(num) {
    var result = "nesto";
    var brojac = 0;
    if (num >=0 && num < 2){
        result = "The number " + num + " is not prime number!"
    }
    else{
    for (i = 2; i < num; i++) {
       
        if ( num % i === 0) {
            brojac +=1
        }
    }
        if(brojac ==0){
            result = "The number " + num + " is prime number!" }
        else{
            result = "The number " + num + " is not prime number!"}
    }
    return result
}
var rezultat = prime(1);
console.log(rezultat);                  //da li je ovde trebalo obuhvatiti i negativne brojeve???
var rezultat = prime(15);
console.log(rezultat);
var rezultat = prime(17);
console.log(rezultat);
var rezultat = prime(17222);
console.log(rezultat);