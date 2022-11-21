/*6.	Write a program that draws a horizontal chart representing three given values. 
For example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *
*/
function stars(a,b,c){
    var result="";
    for (i=0; i<a; i++){
        result += "*";
    }
    result +="\n"
    for(i=0; i<b; i++){
        result += "*";
    }
    result +="\n"
    for(i=0; i<c; i++){
        result += "*"  
    }
    result +="\n"
    return result
}
var zvezdice= stars(3,5,7)
console.log (zvezdice)
console.log(stars(2,6,8))
