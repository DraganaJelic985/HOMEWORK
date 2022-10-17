/*6. This one will continue on task 5. Create one more variable (or input field) and compare it with your age. 
Show how much is that older/younger than you with text for example “He/She is 13 years older/younger than me”. 
If you are the same age - print that you are the same age.*/

var age=15;
var result="";
var myAge=37;

if(myAge>age)
{console.log (result="He/She is "+ (myAge-age)+ " years younger than me")}
else if (myAge<age)
{console.log (result="He/She is "+ (age-myAge)+ " years older than me")}
else 
{console.log (result="We are the same age")}

//zavrseno