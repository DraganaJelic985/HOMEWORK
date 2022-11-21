/*Write a program to filter out falsy values from the array.
[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]*/

function isNumber (array){
    var newArray = [];
    for (i=0; i< array.length;i++ ){
     if (Number.isInteger(array[i]) == true && array[i] != 0){
            newArray.push (array[i])  // ne znam kako da se otarasim nule
     }
    }
    return newArray
}
var rezultat = isNumber([NaN, 0, 15, false, -22, '', undefined, 47, null])
console.log (rezultat)


/*function bouncer(arr) {
    arr = arr.filter(function(item){
        return item;})
    
    return arr;
}

console.log (bouncer([7, "ate", "", false, 9, NaN, undefined, 0]))*/