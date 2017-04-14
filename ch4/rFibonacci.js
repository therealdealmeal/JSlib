function rFib(num) {
  if(num===0) {
    return 0;
  }
  if(num===1) {
    return 1;
  }
  return rFib(num-1) + rFib(num-2);
}

rFib(8);
