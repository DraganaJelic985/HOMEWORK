/*1.	Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
*/

var rezultat = function arrayE(array,e) {
    var result="no";
    for ( var i=0; i<array.length; i++){
     
        if (array[i]===e){
            result= "yes";
        }
        
    }
    return result;
}
 
    console.log (rezultat( [5, -4.2, 3, 7],3));
   
    console.log (rezultat( [5, -4.2, 18, 7],3));

