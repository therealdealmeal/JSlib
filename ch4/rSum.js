function rSum(num) {
  if(num===1) {
    return 1;
  } else {
    return num + rSum(num-1);
  }
}

// rSum(5);
console.log(rSum(5));
