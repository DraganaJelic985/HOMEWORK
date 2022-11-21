/*11.	 Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
  
*/

function arrayOfNum(array){
    var newArray=[];
    var newArray1 = [];
for (i=0; i<array.length; i++){
   newArray[i] = Number(array[i]);
}
for(i=0; i<newArray.length; i++){ 
    
    if (isFinite(newArray[i])===true) { 
        newArray1.push(newArray[i]);
    }
    else{
        
    }
    }
return newArray1
}

var rezultat = arrayOfNum (["1", "21", undefined, "42", "1e+3", Infinity] )
console.log (rezultat)

/*quantity = ["1", "21", undefined, "42", "1e+3", Infinity];
var newArray=[];
for (i=0; i<quantity.length; i++){
   newArray += Number(quantity[i])+",";
}
console.log(newArray)*/