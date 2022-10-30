/*8.	Write a program that computes average marks of the following students. 
Then use this average to determine the corresponding grade. 
	David	80  Marko	77  Dany	88  John	95  Thomas	68

The grades are computed as follows :
< 60%	F   < 70%	D   < 80%	C   < 90%	B   < 100%	A*/

var ocene=[80,77,88,95,68];
var sum=0;


for (i=0; i<ocene.length; i++){
   sum=sum+ocene[i]
}
console.log( "Zbir bodova je:"+sum)

var prosecnaOcena=sum/ocene.length;
console.log("Prosecni bodovi:"+ prosecnaOcena)

if (prosecnaOcena<60){
    console.log("Prosecna ocena je: F")}
else if (prosecnaOcena>60 && prosecnaOcena<70){
    console.log("Prosecna ocena je: D")}
else if (prosecnaOcena>70 && prosecnaOcena<80){
        console.log("Prosecna ocena je: C")}
else if (prosecnaOcena>80 && prosecnaOcena<90){
        console.log("Prosecna ocena je: B")}
else{
    console.log("Prosecna ocena je: A")
}





