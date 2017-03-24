function prevLenghths(arr) {
  for(i=0; i<arr.length; i++) {
    arr[i] = arr[i].length;
  }
  console.log(arr);
}


prevLenghths(["how", "the", "used", "spot", "movement"]);
