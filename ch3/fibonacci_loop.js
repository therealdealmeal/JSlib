var fibonacci = (n) => {
  var arr = [];
  if(n===0) {
    arr.push(1);
    console.log(arr);
    return arr;
  }
  if(n===1) {
    arr.push(1);
    arr.push(1);
    console.log(arr);
    return arr;
  }
  arr.push(1);
  arr.push(1);
  for(i=1; i<n-1; i++) {
    var temp = arr[i] + arr[i-1];
    arr[i+1] = temp;
  }
  console.log(arr);
}

fibonacci(9);
