/*5.	Kreirati funkciju koja prijvata niz stringova kao ulayni parametar, a na izlazu ispisuje samo stringove koji u sebi ne sadrže brojeve. 
Primer: ulazni niz [“12bb”, “pp”, “as23s”, “00sd”] => rezultat [“pp”].*/

function arrayWithOutNumbers (array){
    var newArr = [];
for (i=0; i<array.length;i++){
        if (array[i].includes(0) || 
            array[i].includes(1) || 
            array[i].includes(2) || 
            array[i].includes(3) || 
            array[i].includes(4) || 
            array[i].includes(5) ||
            array[i].includes(6) || 
            array[i].includes(7) ||     //ima jednostavniji nacin, sigurna sam, ali ja redovno 'idem peske'.
            array[i].includes(8) || 
            array[i].includes(9)  ){   
            continue}                           
        else{
            newArr.push(array[i])
        }        
}
    return newArr
}
var rezultat = arrayWithOutNumbers(["12bb", "pp", "as23s", "00sd"]);
console.log (rezultat)