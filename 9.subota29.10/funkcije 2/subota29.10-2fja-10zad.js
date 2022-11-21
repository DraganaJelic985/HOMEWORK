/*Write a function to get the first n characters and add “...” at the end of newly created string.
*/

function noviNiz(string,n){
    var niz= Array.from(string)
    var skracenNiz = niz.slice (0,n);
    skracenNiz.push("...");
    return skracenNiz.join('')
}

var rezultat = noviNiz ("My random string",6)
console.log(rezultat)


/*var niz = ["My random string"];
niz.push("...")
console.log (niz.join(''))*/