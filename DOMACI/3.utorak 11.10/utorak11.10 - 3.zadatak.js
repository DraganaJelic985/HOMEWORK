/*3. Find the grade for input marks (you should have at least two input marks). Grades are:
A (91-100), B (81-90), C (71-80), D (61-70), E (51-60). Optionally print if student has failed the exam.*/
//koliko ja shvatam zahtev je da izracunm prosek dve ocene i dodelim joj slovnu oznaku

var a=90;
var b=20;
var grade=(a+b)/2;

console.log(grade)

if (91 < grade && grade < 100)
{console.log(result="Your grade is  A")}
else if (81 < grade && grade < 90)
{console.log(result="Your grade is B")}
else if (71 < grade && grade < 80)
{console.log(result="Your grade is  C")}
else if (61 < grade && grade < 70)
{console.log(result=" Your grade is D")}
else if (51 < grade && grade < 60)
{console.log(result=" Your grade is E")}
else 
{console.log(result="Student has failed the exam")}

//zavrseno
