/*Write a function to calculate how many years there are left until retirement based on the year of birth.
 Retirement for men is at age of 65 and for women at age of 60. If someone is already retired,
  a proper message should be displayed.*/

  function yearsToRetirement (yearOfBirth, menORwomen){
    var age = 2022-yearOfBirth;
    var ageToRetirement = 0;
    if (menORwomen=="men"){
        if (age <= 65){
           return ageToRetirement = 65-age +" years to retirement."; 
        }
        else{
           return "Already retired";
        }
    }
  
  if (menORwomen=="women"){
    if (age <= 60){
       return ageToRetirement = 60-age +" years to retirement."; 
    }
    else{
       return "Already retired";
    }
    }
  }
  var rezultat = yearsToRetirement(1995,"men")
  console.log (rezultat)
  var rezultat = yearsToRetirement(1950,"men")
  console.log (rezultat)
  
  var rezultat = yearsToRetirement(1995,"women")
  console.log (rezultat)
  var rezultat = yearsToRetirement(1950,"women")
  console.log (rezultat)
  