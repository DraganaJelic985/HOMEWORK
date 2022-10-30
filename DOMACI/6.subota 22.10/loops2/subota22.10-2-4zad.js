/*4.	Write a program that finds the first element larger than minimum and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

var a=[4, 2, 2, -1, 6];

for (i=0; i<a.length;i++){
    if (a[i]<=a[0] &&a[i]<=a[1] &&a[i]<=a[2] &&a[i]<=a[3]){
        min=a[i]
    console.log ("minimum of a given array is "+ min)
}
}
for (j=0; j<a.length;j++){
    if (a[j]<=a[0] &&a[j]<=a[1] &&a[j]<=a[2] && a[j]<=a[j] && a[j]>min){
        
    console.log ("the first element larger than minimum is "+ a[j])
}
}