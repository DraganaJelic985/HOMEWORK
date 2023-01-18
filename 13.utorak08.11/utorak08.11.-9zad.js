/*9.	Write a function to find all the numbers greater than the average.*/

function findAverage (array){

    var average = 0;
    var sum = 0;
    
    for (i=0; i<array.length; i++){
        sum += array[i];
    }
    average = sum/array.length
    return average
    }

function findAllNumbersGreaterThenAverage(array){

    var average = findAverage(array);
    var newArr = [];

    for(i=0; i<array.length; i++){
        if (array[i]>average){
            newArr.push(array[i])
        }
    }
    return newArr
}
    var rezultat = findAllNumbersGreaterThenAverage ([1, 2, 3, 4, 5, 6, 7, 8, 9])
    console.log(rezultat)


