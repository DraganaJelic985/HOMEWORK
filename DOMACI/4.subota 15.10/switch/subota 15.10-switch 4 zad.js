/*4.	Write a program that for a 1-12 number input (representing a month in a year) shows that month’s name. All other cases output a message explaining that input must be a number between 1 and 12. 
		For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”.
*/

var a=10;
var result='';

switch (a){
    case 1:
        result='januar';
        break;
    case 2:
        result="februar";
        break;
    case 3:
        result="mart";
        break;
    case 4:
        result='april';
        break;
    case 5:
        result="maj";
        break;
    case 6:
        result="jun";
        break;
    case 7:
        result='jul';
        break;
    case 8:
        result="avgust";
        break;
    case 9:
        result="septembar";   
        break;   
    case 10:
        result='oktobar';
        break;
    case 11:
        result="novembar";
        break;
    case 12:
        result="decembar";
        break;
    default:
        result="broj mora biti izmedju 1 i 12"
        break;
}
console.log(result)