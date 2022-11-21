/*8.	Write a function that accepts a number as a parameter and checks if the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors 
other than 1 and itself.
*/

function primeNo(broj){

  if (broj===1) {
    return broj+" is a prime number";
  }
  else if(broj === 2){
    return broj+" is a prime number" ;
  }
  else{
    for(i = 2; i < broj; i++){
      if(broj % i === 0){
        return broj+" isn't a prime number";
      }
    }
    return broj+" is a prime number";  
  }
}
var rezultat= primeNo(37);
console.log(rezultat);
var rezultat= primeNo(20);
console.log(rezultat);
var rezultat= primeNo(45);
console.log(rezultat);