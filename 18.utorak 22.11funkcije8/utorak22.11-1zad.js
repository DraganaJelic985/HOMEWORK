/*1.	Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
	Input array: [4, 5, 11, 9]
	Output array: [ 9, 5, 11, 4]
*/
(
    function (array){
   var newArray =[]
   for (i=0; i< array.length; i++){
        if (i== 0){
            newArray.push(array[array.length-1])
        }
        else if (i==array.length-1){
            newArray.push (array[0])
        }
        else{
            newArray.push(array[i])
        }

    }
     console.log(newArray) 
  }
)([4, 5, 11, 9]);










/*  newArray[0]==array[array.lenght-1];
    newArray[array.lenght-1] == array[0];
    return newArray*/