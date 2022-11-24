/*6.	Write a program that checks if a given array is symmetric. An array is symmetric if it can
 be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
	Output: The array isn’t symmetric.   */

function simetricArray (array){
   // var result= "nesto nije uredu";
    var result = "The array is not symmetric.";
    for (i=0; i< array.length/2; i++){
        for (j=array.length-1; j =>(array.length-1)/2; j--){
            if (array[i] === array[j]){
                result = "The array is symmetric."
            }
            break;
          /*  else {
                result = "The array is not symmetric. "  //nesto nije htelo da funkcionise sa else
            }*/                                          //ucitavalo se suvise dugo, i nije se izvrsilo,a nije javilo gresku.
           
        }
    }
    return result
}
var rezultat = simetricArray ([2, 4, -2, 7, -2, 4, 2]);
console.log (rezultat)
var rezultat = simetricArray ([3, 4, 12, 8]);
console.log (rezultat)
var rezultat = simetricArray ([3, 5, 5, 3]);
console.log (rezultat)


// Ovaj ti nije dobar. Probaj da uradis sa nizom [3, 4, 5, 8, 3]. Dobices da je simetrican. Sta mislis zasto? :)
