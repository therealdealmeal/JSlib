function swapTowardCenter(arr) {
  var count = arr.length-1;
  for(i=0; i<Math.floor(arr.length/2); i++) {
    if(i % 2 === 0) {
      var temp = arr[i];
      arr[i] = arr[count];
      arr[count] = temp;
      count -= 2;
    }
  }
  console.log(arr);
}

swapTowardCenter([1,2,3,4,5,6]);
