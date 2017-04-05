function removeAt(arr,index) {
  if(index>=arr.length) {
    var message = "Invalid index input";
    console.log(message);
    return message;
  }
  for(i=index+1; i<arr.length; i++) {
    var temp = arr[i];
    arr[i] = arr[i-1];
    arr[i-1] = temp;
  }
  arr.pop();
  console.log(arr);
  return arr;
}

removeAt([1,2,3,4,5,6,7],9);
