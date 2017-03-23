function lowHigh(arr) {
  min = arr[0];
  max = arr[0];
  for(i=0; i<arr.length; i++) {
    if(arr[i] > arr[i+1]) {
      min = arr[i+1];
    }
    if(arr[i] < arr[i+1]) {
      max = arr[i+1];
    }
  }
  console.log(min);
  return max;
}

lowHigh([6,4,2,90,7]);
console.log(max);
