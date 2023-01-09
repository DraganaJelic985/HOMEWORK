/*4.	Write a function to find the maximum element in array of numbers. 
Filter out all non-number elements.*/


function maxElement(array){

    var numArr = [];
    var maxEl = 0;

    for (i = 0; i<array.length; i++){
        if (typeof(array[i])=="number" &&
            isFinite(array[i]  )) {
            numArr.push(array[i])
        }
    }
    maxEl = Math.max(...numArr)   //ovo sam htela da isprobam, nasla na netu, ali nemam logiku za ove tri tacke koje idu ispred niza, 
                                    //da bi prosao kroz njega. Ako ih ne stavim vraca mi NaN.
    return maxEl
}
var rezultat = maxElement([23, 57, 'abc', false, 123, NaN ])
console.log(rezultat)
