var skylineHeights = (arr) => {
  var count = 0;
  if(arr[arr.length-2]>arr[arr.length-1]) {
     count++;
   }
  for(i=arr.length-3; i>=0; i--) {
    if(arr[i]>arr[i+1] || arr[i]===arr[i+1] || arr[i]<=0) {
      for(j=i; j<arr.length-1; j++) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
      count++;
    }
  }
  while(count>0) {
    count--;
    arr.pop();
  }
  console.log(arr);
  return arr;
}


skylineHeights([-1,1,1,7,3]);
