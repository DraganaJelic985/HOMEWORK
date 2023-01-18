/*1.	 Write a function that shuffles the elements of a given array. 
		Input: [3, 6, 11, 2, 9, 1]
		Output: [6, 2, 9, 1, 3, 11]  (it can be any random permutation of the given array)*/

function shufflesElementsOfArr(arr){
	//debugger;
	var brojPonavljanja = arr.length;
var noviNiz = [];
for (var i=0; i<brojPonavljanja; i++){
	var x = Math.round(Math.random()*(brojPonavljanja-noviNiz.length-1));
	noviNiz.push(arr[x]);
	arr.splice(x,1)
}

	return noviNiz;
}
console.log (shufflesElementsOfArr([3, 6, 11, 2, 9, 1]))




        