/*3.	Write a program that checks if a given number is a three digit long number.*/

var a=123;
var b=Array.from(String(a))

var bl= b.length


function threeDigit(num){
    var result="";
    var array=Array.from(String(num))
    var n= array.length
    if (n===3){
         result = num + " je trocifreni broj";
     }
     else{
        result= num + " nije trocifreni broj";
     }
    return result
}
    var c= threeDigit(111);
console.log(c)
console.log(threeDigit(456456))
