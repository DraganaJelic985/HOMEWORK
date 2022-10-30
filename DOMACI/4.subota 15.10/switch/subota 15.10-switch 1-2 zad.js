/*1.	Write a program that shows text representation of a day in a week for a number input from 1 to 7. Print output in console. 
For input 1, output should be “Monday”.*/
/*2.	Write a program that shows text representation of a day in a week for a number input from 1 to 7. All other cases output a message explaining that input must be a number between 1 and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”.*/

var a=21;
var result='';

switch (a)
{   
case 1:
        result="ponedeljak";
        break;
case 2:
        result="utorak";
        break;
case 3:
        result="sreda";
        break;
case 4:
        result="cetvrtak";
        break;
case 5:
        result="petak"
        break;
case 6:
        result="subota"
        break;   
case 7:
        resullt="nedelja"
default:   
        result="uneti broj mora biti izmedju 1 i 7" };  

console.log (result);
