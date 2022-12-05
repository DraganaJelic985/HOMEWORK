/*3.	Initialize two arrays. The first one should contain student names, the second one the number of 
points for each student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
*/

function postignutiUspeh (student, points){
    var gradesArr = [];
    var result = [];
    for(i=0; i<points.length; i++){
        switch(true){
            case (points[i]<51):
                gradesArr[i]="nije prosao ispit";
            break;
            case (points[i]>50 && points[i]<=60):
                gradesArr[i]= 6;
            break;  
            case (points[i]>60 && points[i]<=70):
                gradesArr[i]= 7;
            break;  
            case (points[i]>70 && points[i]<=80):
                gradesArr[i]= 8;
            break;  
            case (points[i]>80 && points[i]<=90):
                gradesArr[i]= 9;
            break;  
            case (points[i]>90 && points[i]<=100):
                gradesArr[i]= 10;
            break;   
            default: "nije izasao na ispit" ;
            break;           
        }
    }
    for (i=0; i<student.length; i++){
        if (gradesArr[i]=="nije prosao ispit"){
            result.push(student[i]+ " je osvojio " + points[i] +" poena i "+gradesArr[i]+'.\n')
        }
        else{
            result.push (student[i]+ " je osvojio " + points[i] +" poena i dobio ocenu "+gradesArr[i]+ '.\n')
        }
    }
return result.join('')
}
var rezultat = postignutiUspeh([ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ])
console.log(rezultat)

/*function displayGrade(arr1, arr2) {
    var grades = [];
    var newArr = [];
    for (i = 0; i < arr2.length; i++) {
        switch (true) {
            case (arr2[i] < 51) :
            newArr[i] = "not passed";
            break;
            case (arr2[i] >= 51 && arr2[i] <= 60) :
            newArr[i] = 6;
            break;
            case (arr2[i] >= 61 && arr2[i] <= 70) :
            newArr[i] = 7;
            break
            case (arr2[i] >= 71 && arr2[i] <= 80) :
            newArr[i] = 8;
            break;
            case (arr2[i] >= 81 && arr2[i] <= 90) :
            newArr[i] = 9;
            break;
            case (arr2[i] >= 91 && arr2[i] <= 100) :
            newArr[i] = 10;
            break;
            default : "none";
            break;
        }
    }
    for (i = 0; i < arr1.length; i++) {
        grades.push(arr1[i] + " acquired " + arr2[i] + " points and earned " + newArr[i]);
    }
    return "[" + grades.join(", ") + "]";
}
var sprovedi = displayGrade([ "Micahel", "Anne", "Frank",
    "Joe", "John", "David", "Mark", "Bill" ],
    [ 50, 39, 63, 72, 99, 51, 83, 59 ]);
console.log(sprovedi);*/