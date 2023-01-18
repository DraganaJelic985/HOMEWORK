function dialogVithUser(){
    var poruka = alert ("Zdravo, korisnice!");
    var pitanje = prompt("Da li ste zadovoljni nasom uslugom?");
    var text = "Da li je Vas konacni odgovor:"+pitanje;
    if (confirm(text) == true){
        alert("Uspesno poslata poruka!");
    }
    return poruka + pitanje + odgovor;
}
//dialogVithUser()

//MATH RANDOM
function randomArray(a){
    var newArr = [];
    for (i=0; i<10; i++){
        newArr.push((a*Math.random()));
    }
    return newArr;
}
var randomArr = randomArray(50);
console.log (randomArr)

//MATH ROUND
function roundingElementsOfArr(){
    var randomArr = randomArray(50);
    var roundedArr = [];
    for (i=0; i<randomArr.length; i++){
        roundedArr.push(randomArr[i].toFixed(2))
    }
    return roundedArr;
}
console.log (roundingElementsOfArr())

//MATH FLOOR
function roundToNearestInteger(){
    var randomArr = randomArray(50);
    var roundedArr = [];
    for (var i=0; i< randomArr.length; i++){
        roundedArr.push(Math.round(randomArr[i]))
    }
    return roundedArr;
}
console.log (roundToNearestInteger())

//MATH MAX
function maxValueInArr(){
    var arr = randomArray(50);
    var maxValue = Math.max (...arr);
    return maxValue;
}
console.log (maxValueInArr())

//DATE
var date = new Date()
var time = date.toTimeString();
var date1 = date.toDateString();
console.log (date)
console.log (time)
console.log(date1)
