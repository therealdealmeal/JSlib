var count = 0;

function evenAndOdds(arr) {
  for(i=0; i<arr.length; i++) {
    if(arr[i] % 2 !== 0) {
      count += 1;
      if(arr[i-1] % 2 !== 0 && arr[i-2] % 2 !== 0 && count==3) {
        console.log("That's odd");
        count = 0;
      }
    }
    if(arr[i] % 2 === 0) {
      count += 1;
      if(arr[i-1] % 2 === 0 && arr[i-2] % 2 === 0 && count==3) {
        console.log("That's even");
        count = 0;
      }
    }
  }
}



evenAndOdds([24,8,4,10,62,38,33,99,3]);
