/*. 5.	Write a program that draws a square of a given size. For example,  
if the size of square is 5 the program should draw: 
*****
* *
* *
* *
******/

function square(a){
    var result="";
    for (i=0; i<a; i++){
        for (j=0; j<a; j++){
            if(i===0 || i===a-1){   //iskreno prepisala po secanju na primer koleginice
                result += "*";      //a i to sam sklopila sa velikom mukom...
            }
            else{
                if (j===0 || j===a-1){
                    result += "*";
                }
                else{
                    result += " ";
                }
            }          
        }
        result += "\n"
    }
    return result
}
var kocka= square(5)
console.log(kocka)