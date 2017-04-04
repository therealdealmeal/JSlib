var max = 0;
var min = 0;
var sum = 0;

function maxMinAverage(arr) {
 for(i=0; i<arr.length; i++) {
   if(arr[i]>max) {
     max = arr[i];
   }
   if(arr[i]<min) {
     min = arr[i];
   }
   sum += arr[i];
 }
 console.log(max);
 console.log(min);
 console.log(sum/arr.length);
}


maxMinAverage([3,2,11,16,5,9,19]);
