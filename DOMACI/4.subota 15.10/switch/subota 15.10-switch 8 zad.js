/*8.	Write a program that takes as input two numbers and a string denoting the operation (“+”, “-”, “*”, “/”)
 and prints out the appropriate result. Watch out for division by zero!*/

var a=15;
var b=3;
var s="%";
var result="HGYIU";


switch (s){
    case("+"):
        result= a+b
        break;
    case ("-"):
        result = a-b
        break;
    case("*"):
        result= a*b
        break;
    case ("/"):
        switch(b){
            case(0): result="beskonacno"
            break;
            default: result=a/b}
        break;
    case ("%"):
        result= a%b
        break;
default:
    result= "nepoznata operacija"
}

console.log (" rezultat izraza " + a + s + b +" je: "+result)