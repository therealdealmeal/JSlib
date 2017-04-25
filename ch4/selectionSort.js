var selectionSort = (arr) => {
  var minIndex, temp,
      len = arr.length;

  for(i=0; i<len; i++) {
    minIndex = i;
    for(j=i+1; j<len; j++) {
      if(arr[j]<arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}

var swap = (arr,indexOne,indexTwo ) => {
  var temp = arr[indexOne];
  arr[indexOne] = arr[indexTwo];
  arr[indexTwo] = temp;
}

selectionSort([15,4,42,23,16]);
