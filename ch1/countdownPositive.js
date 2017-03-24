var count = 0;

function cp(arr) {
 for(i=0; i<=arr.length; i++) {
   if(arr[i] > 0) {
     count += 1;
   }
 }
  arr[arr.length-1] = count;
  console.log(arr);
}

cp([-1,1,1,1]);
