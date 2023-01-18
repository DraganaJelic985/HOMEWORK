/*9.	Write a function that for a given departure and arrival time calculates the time the trip takes.
	Input: 8:22:13 11:43:22
	Output: 3 hours 21 minutes 9 seconds
*/

function timeOfTrip (polazi, stize){

	var polaziStr = polazi.split(":");
	var polaziNum = polaziStr.map(function(polaziStr){return parseInt(polaziStr)});
	var polazakUsekundama = polaziNum[0]*3600+polaziNum[1]*60+polaziNum[2];
	
	var stizeStr = stize.split(":");
	var stizeNum = stizeStr.map(function(stizeStr){return parseInt(stizeStr)});
	var stizeUsekundama = stizeNum[0]*3600+stizeNum[1]*60+stizeNum[2];

	var resultUsekundama = stizeUsekundama-polazakUsekundama
	if (resultUsekundama<0){
		resultUsekundama = 24*60*60+resultUsekundama;
	}
	var sati = Math.floor(resultUsekundama/3600);
	var minuta =Math.floor((resultUsekundama-sati*3600)/60);
	var sekundi = resultUsekundama-minuta*60-sati*3600
	return  sati+"sati "+minuta+"minuta "+sekundi+"sekundi";
}
var rezultat = timeOfTrip ('8:22:13','11:43:22' )
console.log(rezultat)
var rezultat = timeOfTrip ('23:30:00','01:30:00' )
console.log(rezultat)

