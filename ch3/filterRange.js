function filterRange(arr,min,max) {
  var count = 0;
  for(i=arr.length-1; i>0; i--) {
    if(arr[i]>min && arr[i]<max) {
      for(j=i; j<arr.length-1; j++) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
      count++;
    }
  }
  while(count>0) {
    count--;
    arr.pop();
  }
  console.log(arr);
  return arr;
}


filterRange([12,34,56,67,78,90],43,79);
