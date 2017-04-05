function rotate(arr,shift) {
  while(shift>0) {
    for(i=arr.length-1; i>0; i--) {
      var temp = arr[i];
      arr[i] = arr[i-1];
      arr[i-1] = temp;
    }
    shift--;
  }
  while(shift<0) {
    for(j=0; j<arr.length-1; j++) {
      var temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
    }
    shift++;
  }

  console.log(arr);
}

rotate([1,2,3,4,5,6],-2001);
