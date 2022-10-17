/*1. Check if a triangle is equilateral, scalene or isosceles, and print which triangle is yours.. 
Example: sides of triangle are 3, 4, 5. This is scalene triangle.*/

var result="";
var a=3;
var b=4;
var c=5;

if (a==b==c)
{console.log (result="Trangle is equilateral")}
else if (a==b || a==c || b==c )
{console.log (result="Trangle is isosceles")}
else if (a!=b || a!=c || b!=c )
{console.log (result="Trangle is scalene")}

//zavrseno