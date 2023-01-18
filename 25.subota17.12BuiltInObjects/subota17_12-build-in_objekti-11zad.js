/*11.	
a.	Write a function that generates a random integer value between 5 and 20.*/
function integarValue (min, max){
    return Math.round(Math.random()*(max-min)+min);
}
console.log (integarValue(5,20))

/*b.	Write a function that generates a random integer value between 50 and 100. */
console.log (integarValue(50,100))


/*c.	Write a function which expects a number and a callback generator function and returns an array of numbers
 produced by the generator function.    */
function napraviNiz (duzinaNiza){
    var niz = [];
    for (i = 0; i<duzinaNiza; i++){
        niz[i] = integarValue(1,100)
    }
    return niz;
}
console.log (napraviNiz(10))


