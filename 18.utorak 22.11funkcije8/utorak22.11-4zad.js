/*4.	Write a function with parameters name and surname that returns a function 
that suggests an email in the form name.surname@gmail.com. 
Input: pera peric
	Output: pera.peric@gmail.com

*/
	function createEmailUser(name, surname){
		var result = name +"."+ surname;
		return function (){console.log(result+"@gmail.com")}
	}
	var rezultat = createEmailUser("pera", "peric");
	rezultat()

	function a() {
		console.log('A!');
		return function () {
		console.log('B!');
		};
		}
		var bigB = a();
		bigB();
		