function pushFront(arr,val) {
  for(i=arr.length-1; i>=0; i--) {
     arr[i+1] = arr[i];
  }
  arr[0] = val;
  console.log(arr);
}
