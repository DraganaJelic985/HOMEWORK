/*8.	Write a function to hide email addresses to protect them from unauthorized users.

	"somerandomaddress@example.com" -> "somerand...@example.com"  */

function hideEmailAddress(email){
	var emailArr = email.split("");
	var hideEmail = [];
	hideEmail.push(emailArr.slice (0,5).join(""));
	hideEmail.push(emailArr.slice(emailArr.indexOf("@"), email.length-1).join(""));
	return hideEmail.join("...");
}
console.log (hideEmailAddress("somerandomaddress@example.com"))
    
