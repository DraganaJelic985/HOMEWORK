/*9.	Write a program that displays all the combinations of two numbers between 1 and 7.
 Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. 
 (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).*/

 function combTwoNo(n){
    var newArray=[];
    var brojac=0;
    for (i=1; i<=n; i++){
        for (j=1; j<=n;j++){

            if (i != j){
       newArray.push("("+i+","+j+")");
       brojac++
            }
        }
    }
return "Postoji "+brojac +" kombinacija:"+newArray;
}
 var rezultat= combTwoNo(7)
 console.log(rezultat)