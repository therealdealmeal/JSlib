function biggieSize(arr) {
  for(i=0; i<arr.length; i++) {
    if(arr[i] > 0) {
      arr[i] = "big";
    }
  }
  console.log(arr);
}

arr = [-1, 3, 5, -5];
biggieSize(arr);
