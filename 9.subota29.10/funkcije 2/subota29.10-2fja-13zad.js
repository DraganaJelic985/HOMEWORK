/*13.	Write a function to humanize a number (formats a number to a human-readable string) 
with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th*/

function humanizeNum(num){
    var humanize="";
    if(num == 1){
        return "1st"
    }
    else if(num == 2){
        return "2nd"
    }
    else if (num == 3){
        return "3rd"
    }
    else{
        return num+"th"
    }
}
var rezultat = humanizeNum(15)
console.log (rezultat)

// Sta ako probam da unesem broj 11? Ili broj 21? Ili broj 32? :) Onda neces dobiti dobar rezultat. Zasto? :) 
