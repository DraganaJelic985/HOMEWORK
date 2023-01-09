/*1.	Write a function named tellFortune that:
	takes 4 arguments: number of children, partner's name, geographic location, job title.
	outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.*/


function tellFortune(jobTitle, geoLoc, name, numOfChild){
 var x = Math.round(Math.random()*(4-1)+1);
 var y = Math.round(Math.random()*(4-1)+1);
 var z = Math.round(Math.random()*(4-1)+1);
 var n = Math.round(Math.random()*(4-1)+1);
 var result1 = "";
 var result2 = "";
 var result3 = "";
 var result4 = "";
 switch (x) {
    case 1 : result1 = jobTitle[x-1];
        break;
    case 2 : result1 = jobTitle[x-1];
        break;
    case 3 : result1 = jobTitle[x-1];
        break;
    case 4 : result1 = jobTitle[x-1];
        break;
}
switch (y) {
    case 1 : result2 = geoLoc[y-1];
        break;
    case 2 : result2 = geoLoc[y-1];
        break;
    case 3 : result2 = geoLoc[y-1];
        break;    
    case 4 : result2 = geoLoc[y-1];
        break;
}
switch (z) {
    case 1 : result3 = name[z-1];
        break;
    case 2 : result3 = name[z-1];
        break;
    case 3 : result3 = name[z-1];
        break;
    case 4 : result3 = name[z-1];
        break;
}
switch (n) {
    case 1 : result4 = numOfChild[n-1];
    break;
    case 2 : result4 = numOfChild[n-1];
    break;
    case 3 : result4 = numOfChild[n-1];
    break;
    case 4 : result4 = numOfChild[n-1];
    break;
}
return "You will be a "+ result1+" in "+ result2 +" , and married to "+ result3+" with " +result4 +" kids."
}
    

var rezultat = tellFortune(["ekonomista ", "programer ", "tehnolog ", "cistac ulica "],
                            ["Beogradu ", "Cacku", "Krusevcu", "Uzicu"],
                            ["Janko", "Marko", "Stanko", "Branko"],
                            ["2", "5", "3", "10"])
console.log(rezultat)

