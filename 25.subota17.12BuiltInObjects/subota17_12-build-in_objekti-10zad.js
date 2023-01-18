
/*
a.	Write a constructor function that creates points in space. Each point in space has its own x, y, and z coordinate. 
For example, (3, 5, 1) can be a point in space.

b.	Write a function that calculates the distance between two points in the space. 

*/
//posla sam od pretpostavke da je svemir kocka cije su stranice duge 6 'necega'.

function odredjivanjeTacakaUsvemiru(){
    var x = Math.round(Math.random()*(5-1)+1);
    var y = Math.round(Math.random()*(5-1)+1);
    var z = Math.round(Math.random()*(5-1)+1);
    var tackaUsvemiru = [x, y, z]
    return tackaUsvemiru;
}



function odredjivanjeDaljineIzmadjuTacakaUsvemiru(tackaA, tackaB){
    var tackaA = odredjivanjeTacakaUsvemiru(); console.log (tackaA)
    var tackaB = odredjivanjeTacakaUsvemiru(); console.log (tackaB)
    
var distance = Math.sqrt(Math.pow((tackaA[0]-tackaB[0]),2)+Math.pow((tackaA[1]-tackaB[1]),2)+Math.pow((tackaA[2]-tackaB[2]),2))
return distance;
}
console.log(odredjivanjeDaljineIzmadjuTacakaUsvemiru())
console.log (Math.sqrt(17))
