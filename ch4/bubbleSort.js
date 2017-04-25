var bubbleSort = (arr) => {

  for(i=0; i<arr.length-1; i++) {
    if(arr[i]>arr[i+1]) {
      var temp = arr[i+1];
      arr[i+1] = arr[i];
      arr[i] = temp;
      i = i - 2;
    }
  }
  return arr;
}


bubbleSort([11,3,1,6,5,10]);
