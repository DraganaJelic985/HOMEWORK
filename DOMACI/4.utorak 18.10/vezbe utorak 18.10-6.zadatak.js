/*6. Write a code to count all letters in a word and show that count on screen.
 Example: Given word is "Eclip542se". Result should be something like "There is 7 letters in this word".*/

var a=['E','c','l','i','p',5,4,2,'s','e'];
var result=0

for (i=0; i<a.length;i++){
    if (typeof a[i]=='number'){
        result+=0
    }
    else
    {
        result+=1
    }
}
 console.log("There is "+result+ " letters in this word")