/*3.	Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
	Input: prograMming
	Output: progra**ing, 2*/

    (
         function (string){
        var array= Array.from(string);
        var brojac = 0;
        for (i=0; i<array.length;i++){
            if (array[i]==="m" || array[i]==="M"){
                array[i] = "*";
                brojac += 1;
            }
        }
        console.log( array.join('') + ","+brojac);
    })("prograMming")

    