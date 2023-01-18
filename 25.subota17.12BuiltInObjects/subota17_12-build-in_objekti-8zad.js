/*8.	Write a function that calculates a number of days to your birthday.
Input: 25 February 
Output: 5 days
*/
function numberDaysToYourBirthday (date, month, year){
    var dateOfBirthday = new Date(year,month-1,date);
    var today = new Date();
    var timeForBirthday = dateOfBirthday.getTime()
    var timeForToday = today.getTime();
    var oneDayInMiliseconds = 24*60*60*1000;
    var daysToBirthday = (timeForBirthday-timeForToday)/oneDayInMiliseconds;
    var result = ""
if (daysToBirthday < -1){
    result = "Your birthday has passed!!"
}
else if (dateOfBirthday.getDate() ==today.getDate() &&
        dateOfBirthday.getMonth() ==today.getMonth() &&
        dateOfBirthday.getFullYear() ==today.getFullYear()){
    result = "Your birthday is today!"
}
else{
    result = "Your birthday is for "+ Math.ceil(daysToBirthday) + " days!"
}
    return result;
}
console.log (numberDaysToYourBirthday(14, 01, 2023))
 
