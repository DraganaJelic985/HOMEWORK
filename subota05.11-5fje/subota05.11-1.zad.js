/*1.	Find the min and max element in the following array and switch their places.
 Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]*/



function minMax (arr){
    var min = arr[0];
    var max = arr[0];
    var minI= 0;
    var maxI= 0;
    var newArr = arr;
    for (i=0; i<arr.length; i++){
        if (max <= arr[i]){
            max = arr[i];
            maxI = i;
        }
    }
    for(i=0; i<arr.length; i++){
        if (min>= arr[i]){
            min = arr[i];
            minI = i
        }
    }
    newArr[minI] = max;
    newArr[maxI] = min;
    return newArr;
}
var rezultat = minMax ([3, 500, 12, 149, 53, 414, 1, 19]);
console.log (rezultat)


/*function minMax (array){
    var min=array[0];
    var max=array[0];
    var minI=0;
    var maxI=0;
    var newArray=array;
    for (i=0; i<array.length; i++)
        if (min>=array[i]){
            min=array[i];
            minI=i
        }
        for (i=0; i<array.length; i++)
        if (max<=array[i]){
            max=array[i];
            maxI=i
        }
        newArray[maxI]=min
        newArray[minI]=max
        return newArray
}
var result= minMax([3, 500, 12, 149, 53, 414, 1, 19])
console.log (result)*/