function minToFront(arr) {
  var min = arr[0];
  var index = 0;
  for(i=0; i<arr.length; i++) {
    if(arr[i]<arr[i+1] && arr[i]<min) {
      min = arr[i];
      index = i;
    }
  }
  for(j=index; j>0; j--) {
    var temp = arr[j];
    arr[j] = arr[j-1];
    arr[j-1] = temp;
  }
  return arr;
}


minToFront([223,55,1212,13,1098]);
