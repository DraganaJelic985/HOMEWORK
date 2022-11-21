/*Write a function to find a word within a string.
'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"
*/
function findAword(string, word){
    
    var x=0;
    var y=0;
   
    for (i=0; i< string.length; i++)
        {
        if(string[i] == word[0])
            {
            for(j=i;j< i+word.length;j++)
               {
                if(string[j]==word[j-i])
                  {
                    y++;
                  }
                if (y==word.length){
                    x++;
                }
            }
            y=0;
        }
    }
   return "'"+word+"' was found "+x+" times.";  //ovo je prepisano, ali razumela sam...
}

 var rezultat = findAword('The quick brown fox', 'fox')
 console.log (rezultat)
 var rezultat = findAword('aa bb cc dd aa', 'aa')
 console.log (rezultat)