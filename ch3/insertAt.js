function insertAt(arr,index,val) {
  arr.push(val);
  for(i=arr.length-1; i>=index; i--) {
    var temp = arr[i];
    arr[i] = arr[i-1];
    arr[i-1] = temp;
  }
  console.log(arr);
}

insertAt([1,2,3,4,5,6,7,8,9],6,"Hello");

function insertAt(arr,index,val) {
  arr.splice(index,0,val);
  console.log(arr);
}
