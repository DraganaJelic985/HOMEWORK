/*3.	Napisati funkciju koja za zadatu reč (ili rečenicu) proverava koliko ima samoglasnika i koliko suglasnika*/

function proveraGlasovaUrecenici(recenica){
    var arr = recenica.toLowerCase()  
    var arr1 = Array.from(recenica)                    //split('');
    var brSamoglasnika = 0;
    var brZnakova = 0;
    var newarr= [];
    var newarr1 = [];
    var newarr2 = [];
    var brSuglasnika=0;
    for (i=0; i<arr1.length; i++){
        if(arr[i] === 'a' ||
            arr[i] ==='e' ||
            arr[i] === 'i' ||
            arr[i] === 'o' ||
            arr[i] === 'u'){
                brSamoglasnika += 1;
                newarr1.push(arr[i])
            }
        else if ( arr[i] === '.' ||
            arr[i] === ',' ||
            arr[i] === '?' ||                //ovde sam pokusala daa uradim sa != pa znak, ali nije htelo da mi izuzme znake koje sam navela
            arr[i] === '!' ||                  //zato sam prvo njih izbacila iz stringa, pa tek onda brojala suglasnike
            arr[i] === ' '){                    //ne znam kako bih ukljucila slucaj kad je r samoglasnik....
                brZnakova +=1;                  //tu bi mi vec trebala podela reci na slogove, pa ako nema ni jedan drugi suglasnik, onda broji r.
                newarr.push(arr[i])
                }
        else{
            brSuglasnika += 1
            newarr2.push(arr[i])
        }
    }
    return   "U recenici: "+ recenica+ " ima "+brSamoglasnika+" samoglasnika, i to su: " + newarr1+" i "+brSuglasnika+" suglasnika, i to su: "+newarr2
                                         
}

var rezultat = proveraGlasovaUrecenici("Ja se zovem Dragana!")
console.log(rezultat)