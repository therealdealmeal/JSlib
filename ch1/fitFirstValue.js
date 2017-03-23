function fit(arr) {
  if(arr.length < arr[0]) {
    console.log("Too big");
  }
  if(arr.length > arr[0]) {
    console.log("Too small");
  }
  if(arr.length===arr[0]) {
    console.log("just right!");
  }
}

fit([1, 1, 4]);
