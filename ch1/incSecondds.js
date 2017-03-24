function incSeconds(arr) {
  for(i=0; i<arr.length; i++) {
    if(i % 2 !== 0) {
      arr[i] = 1;
    }
    console.log(arr[i]);
  }
  console.log(arr);
  return arr;
}


incSeconds([2,4,2,5,6,3,2,5]);
