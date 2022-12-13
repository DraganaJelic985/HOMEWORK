/*:))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values 
multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]*/

function sortAndMultiplied (arr){
    var multipledArr=[];
    for (i=0;i<arr.length; i++){
        for(j=0; j<arr.length;j++)
            if(arr[i]<arr[j]){
              var x = arr[i];  //ovde sam koristila trenutnu promenljivu da zamenim mesta brojevima
              arr[i]=arr[j];
              arr[j]=x;     
        }
    }
    for (i=0;i<arr.length;i++){
        multipledArr.push (arr[i]*2)
    }
    return multipledArr
}
var rezultat = sortAndMultiplied([ 13, 11, 15, 5, 6, 1, 8, 12 ]);
console.log (rezultat)

/*function minMax(array){
array.sort(function(a,b) {return a-b})
return array
}

var result=minMax([ 13, 11, 15, 5, 6, 1, 8, 12 ])
console.log (result)*/