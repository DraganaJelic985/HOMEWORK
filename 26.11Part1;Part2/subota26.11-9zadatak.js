/* 9. Write a function that prints out the date of the next day. 
Output:  25. 10. 2018. */


function dateNextDay (){
    var today = new Date();
    var dd = today.getDate()+1;
    var mm = today.getMonth()+1;
    var year = today.getFullYear();
    today = dd+'/'+mm+'/'+year;

    return today;
}
console.log(dateNextDay())

