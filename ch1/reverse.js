count = 0;

function reverse(arr) {
  for(i=arr.length-1; i>Math.floor(arr.length/2); i--) {
    var temp = arr[i];
    arr[i] = arr[count];
    arr[count] = temp;
    count += 1;
  }
  console.log(arr);
}


reverse([80,65,18,15,48,74]);
