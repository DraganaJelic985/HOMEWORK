/*2.	Napisati funkciju koja za godinu (kao ceo pozitivan broj) proverava da li je prestupna. 
Godina je prestupna ako je deljiva sa 4 i nije godina veka (znači ako nije deljiva sa 100 - 1900. nije bila prestupna).
 Od toga odstupa svaka četvrta godina veka (znači ako je deljiva sa 400, onda je ipak prestupna - npr. 2000. je prestupna).*/

function prestupneGod (godina){
var result =  "nesto nije dobro";
 switch(true){
   case (!Number.isInteger(godina)):
   case (godina <0):
      result = "Godina "+godina + " nije praviilno unesena!";
      break;
   case (godina%4 == 0 && godina%100 != 0):
   case (godina %400 == 0):
      result = "Godina "+godina + " je prestupna!"
      break;
   default:
      result = "Godina "+godina + " nije prestupna!"
      break;
 }
    return result
 }
 var rezultat= prestupneGod(200.024)
 console.log (rezultat)
 var rezultat= prestupneGod(200024)
 console.log (rezultat)
 var rezultat= prestupneGod(400)
 console.log (rezultat)
 var rezultat= prestupneGod(1000)
 console.log (rezultat)
 var rezultat= prestupneGod(2000)
 console.log (rezultat)
 var rezultat= prestupneGod(1996)
 console.log (rezultat)


