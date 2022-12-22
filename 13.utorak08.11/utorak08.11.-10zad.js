/*10.The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters).
 Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
	Starvation: less than 15
	Anorexic: less than 17.5
	Underweight: less than 18.5
	Ideal: greater than or equal to 18.5 but less than 25
	Overweight: greater than or equal to 25 but less than 30
	Obese: greater than or equal to 30 but less than 40
	Morbidly obese: greater than or equal to 40
*/
 function bodyMassIndex (weight,height){
    
    var bmi = weight/(height*height);
    var result = "";

    switch (true){
        case (bmi<15):
            result= "Starvation";
            break;
        case(bmi>=15 && bmi<17.5):
            result = "Anorexic";
            break;
        case(bmi>=17.5 && bmi<18.5):
            result = "Underweight";
            break;
        case(bmi>=18.5 && bmi<25):
            result = "Ideal";
            break;
        case(bmi>=25 && bmi<30):
            result = "Overweight";
            break;
        case(bmi>=30 && bmi<40):
            result = "Obese";
            break;
        case(bmi>=40 ):
            result = "Morbidly obese";
            break;

    }
    
    return result;
 }

 var rezultat = bodyMassIndex (68, 1.73);
 console.log (rezultat)




