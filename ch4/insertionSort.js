var insertionSort = (arr) => {
  var len = arr.length;

  for(i=1; i<len; i++) {
    var temp = arr[i];

    for(j=i-1; j>=0 && (arr[j]>temp); j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = temp;
  }
  console.log(arr);
  return arr;
}


insertionSort([23,42,3,16,8,15]);
