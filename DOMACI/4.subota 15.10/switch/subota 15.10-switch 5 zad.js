/*5.5.	Write a program that for a 1-12 number input (representing a month in a year) shows what season it is.
 All inputs different from 1-12 output a message explaining that input must be a number between 1 and 12. */

var a=11;
var result="dfjnskdfjmds";

switch (a){
    case 12:
    case 1:
    case 2:
        result="Winter"
        break;
    case 3:
    case 4:
    case 5:
        result="Spring"
        break;
    case 6:
    case 7:
    case 8:
        result="Sumer"
        break;
    case 9:
    case 10:
    case 11:
        result="Autunum"
        break;
    default:
        result=" Number mast be betwen 1 and 12"
        break;
}
console.log (result)
