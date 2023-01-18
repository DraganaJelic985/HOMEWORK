/*a.	Write a function that finds all the elements in a given array less than a given element. 
	Input: [2, 3, 8, -2, 11, 4], 6 
	Output: [2, 3, -2, 4]*/

    function findElLessThen(array,element){

    var newArr = [];

    for (i=0; i<array.length; i++){
        if (array[i]< element){
            newArr.push(array[i])
        }
    }
return newArr
}
var rezultat = findElLessThen ([2, 3, 8, -2, 11, 4], 6 );
console.log (rezultat)


/*b.	Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
	Output: [’Programming’, ‘product’]*/

function findElThatStrartWidth(array,start){

    var newArr=[];
    var count = 0;
    var newArr1 = [];

    for(i=0; i<array.length;i++){
        newArr.push (array[i].toLowerCase())
    }
for (i=0; i<array.length;i++){
    for (j=0; j<start.length; j++){
        if(newArr[i][j]==start[j]){
            count +=1;
        
        if (count==start.length){
            newArr1.push (array[i])
        } 
        }
    }
    count=0;
}
    return newArr1
}
var rezultat = findElThatStrartWidth(['JavaScript', 'Programming', 'fun', 'product'],'pro')
console.log (rezultat)

/*c.	Write a function that expects an array and a callback function that filters out some of the elements. 
Use functions defined in a) or b) to test it. 
*/
function filtriranjeNiza(array){

    var result = findElLessThen(array,6)

    return result
}
var rezultat = filtriranjeNiza([2, 3, 8, -2, 11, 4]);
console.log(rezultat)