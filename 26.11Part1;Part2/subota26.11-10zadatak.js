/*10. Write a function that prints out the date of the previous day. 
Output:  23. 10. 2018. 
*/


function datePreviousDay (){
    var today = new Date();
    var dd = today.getDate()-1;
    var mm = today.getMonth()+1;
    var year = today.getFullYear();
    today = dd+'/'+mm+'/'+year;

    return today;
}
console.log(datePreviousDay())
