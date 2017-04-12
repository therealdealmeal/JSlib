const secondLargest = (arr) => {
  if(arr.length<2) {
    return null;
  }
  let max1 = null;
  let max2 = null;
  for(i=0; i<arr.length; i++) {
    if(arr[i]>max1) {
      max1 = arr[i];
    }
  }
  for(j=arr.length-1; j>=0; j--) {
    if(arr[j]>max2 && arr[j]!==max1) {
      max2 = arr[j];
    }
  }
  console.log(max1);
  console.log(max2);
  return max2;
}

secondLargest([42,1,4,Math.PI,7]);
