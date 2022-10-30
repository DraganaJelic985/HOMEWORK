/*7. Write a code to find on which index in array is letter "C" and show that index on screen. 
Given array is: [1, 3, 32, $, g, h, t, s, c, 66, 23, h2].*/

var a=[1, 3, 32, '$', 'g', 'h', 't', 's', 'c', 66, 23, 'h2'];


for (index=0; index<a.length; index++){
    if (a[index]=="c"){
        console.log ("Letter \"c\" is on " + index + " index in array.")

    }
}
