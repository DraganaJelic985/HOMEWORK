/*3.	Write a program that for a 1-7 number input (representing a day in a week) shows if that day is a weekday or weekend. All other cases output a message explaining that input must be a number between 1 and 7.
		For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”.
*/
var a=6;
var result='';

switch(a){
case 1:
case 2:
case 3:
case 4:
case 5:
    result='it\'s weekday.';
    break;
case 6:
case 7:
    result='it\'s a weekend.'
    break;
default:   
result="uneti broj mora biti izmedju 1 i 7." };  

console.log(result)
