/*1.	Write a program that calculates the maximum of two given numbers. */

function maxTwo (a,b){
    if (a>b){
        result= a+" je vece od "+b}
    else if (a<b){
        result= a+" je manje od "+b
    }
    else {
        result= a+" je jednako  "+b
    }
    return result
}
var rezultatFje= maxTwo(3,5);
console.log (rezultatFje)
console.log ( maxTwo (15,30))
console.log ( maxTwo (15313,65546530))
