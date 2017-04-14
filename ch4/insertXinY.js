var insert = (arr,x,y) => {
  arr.push(x);

  for(i=arr.length-1; i>y; i--) {
    let temp = arr[i-1];
    arr[i-1] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

insert([1,3,5,7],10,2);
// [1,3,10,5,7]
