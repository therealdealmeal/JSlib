function negOutlook(arr) {
  newArr = [];
  for(i=0; i<arr.length; i++) {
    newArr[i] = arr[i];
    if(arr[i] > 0) {
      newArr[i] = -(newArr[i]);
    }
  }
  console.log(newArr);
  return newArr;
}

negOutlook([1,2,43,-5,-74,43]);
