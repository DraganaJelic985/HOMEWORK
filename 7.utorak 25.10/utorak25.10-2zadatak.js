/*2.	Write a program that checks if a given number is odd.*/

function ifOdd (a){
    if (a%2==0){
        result= a + " je paran broj"
    }
    else{
        result=a+ " je neparan broj"
    }
    return result
}
console.log ( ifOdd (3))
console.log ( ifOdd (6))
console.log ( ifOdd (9))
console.log ( ifOdd (3123415864))
