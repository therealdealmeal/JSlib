var binaryTree = (arr,key) => {
  let half = Math.floor(arr.length/2);
  let max = arr.length-1;
  let min = 0;

  while(arr[half]<=arr[max]) {

    if(key===arr[half]) {
      return arr[half];
    }

    if(key<arr[half]) {
      max = half;
      half = arr[0];
    }
    if(key>arr[half]) {
      min = half;
      half = (max + min) / 2;
    }
  }

}

binaryTree([1,3,4,6,7,11,18,23,90],23);
