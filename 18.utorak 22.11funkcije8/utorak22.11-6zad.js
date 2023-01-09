/*6.	Write a function that checks if a given string is valid password. 
The password is valid if it is at least 6 characters long and contains at least one digit. 
The function should receive two callbacks named successCallback and errorCallback that should be called 
in case password is correct or invalid. 
Input: JSGuru 
Output: Your password is invalid!

	Input: JSGuru123
	Output: Your password is cool! 

*/
function validatePassword(password){
    debugger;
    var result = "nesto nije dobro";
    function successCallback(){
         return"Your password is cool!";
        }
    function errorCallback(){
            return "Your password is invalid!";
        }

    if (password.length<6){
        result= errorCallback();
    }
    else {
        for (var i=0; i<10; i++){
            if (!password.includes(i)){
                result= errorCallback();
            }
            else{
                result= successCallback();
                break;
            }
        }
    }
    return result;
}
var rezultat = validatePassword("JSGuru");
console.log (rezultat)
var rezultat = validatePassword("JSGuru123");
console.log (rezultat)


