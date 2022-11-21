/*Write a function to hide email address.
"myemailaddress@bgit.rs" -> "mye...@bgit.rs"*/

function hideEmail (email){

var emailArr = Array.from(email) ;
emailArr.splice(3,emailArr.indexOf("@")-3,"...")

return emailArr.join('')
}

var rezultat = hideEmail("myemailaddress@bgit.rs")
console.log (rezultat)

