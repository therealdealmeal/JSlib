function shiftArray(arr) {
  var temp = arr[0];
  for(i=0; i<arr.length; i++) {
    arr[i] = arr[i+1] || 0;
  }
  console.log(arr);
}


shiftArray([1,2,3,4,5]);
