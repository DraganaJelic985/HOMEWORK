/*7.	Write a function to convert string into an array. 
Space in a string should be represented as “null” in new array*/

function stringToArray(string){
    aArray=Array.from(string)
    for (i=0; i<aArray.length; i++){
        if (aArray[i]==" "){
    aArray.splice(aArray.indexOf(" "), 1, "null")  
        }
    }
    return aArray
}

var niz=stringToArray("My random string")
console.log (niz)

var niz=stringToArray("Random") 
console.log (niz)