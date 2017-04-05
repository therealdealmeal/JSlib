function filterRange(arr,min,max) {
  var count = 0;
  for(i=0; i<arr.length; i++) {
    if(arr[i]>min && arr[i]<max) {
      for(j=i; j<arr.length-1; j++) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
      count++;
    }
  }
  console.log(count);
//   while(count>0) {
//     count--;
//     arr.pop();
//   }
  console.log(arr);
}


filterRange([1,2,3,4,5,6,7,8,9],3,6)
