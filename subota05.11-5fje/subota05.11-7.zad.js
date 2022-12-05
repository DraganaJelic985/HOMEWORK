/*7.	Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) 
in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]*/


function noviNiz(arr){
var newarr = [];
var newarr1=[];
    for (i=0; i<arr.length;i++){
        if (typeof (arr[i])=='string'){
            if (arr[i].length>1){
            newarr.push(arr[i])
            }
        }
    }
    for (i=0; i<newarr.length; i++){
            newarr1.push (newarr[i].slice(0,2))
    }
return newarr1.join('')
}

var rezultat = noviNiz([ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ])
console.log (rezultat)