/*3.	Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3*/

var a=[4, 2, 2, -1, 6];

for (i=0; i<a.length;i++){
    if (a[i]<=a[0] &&a[i]<=a[1] &&a[i]<=a[2] &&a[i]<=a[3]){
    console.log ("minimum of a given array is "+ a[i]+ ", index "+i)
}
}
