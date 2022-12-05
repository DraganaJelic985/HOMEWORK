/*:))Sort a previously defined array in a descending order and display it in the console.
Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]*/

function sortAndMultiplied (arr){
    
    for (i=0;i<arr.length; i++){
        for(j=0; j<arr.length;j++)
            if(arr[i]>arr[j]){
              var x = arr[i];  
              arr[i]=arr[j];
              arr[j]=x;     
        }
    }
    return arr
}
var rezultat = sortAndMultiplied([ 13, 11, 15, 5, 6, 1, 8, 12 ]);
console.log (rezultat)



/*function minMax(array){
    array.sort(function(a,b) {return b-a})
    return array
    }
    
    var result=minMax([ 13, 11, 15, 5, 6, 1, 8, 12 ])
    console.log (result)*/
