function iFac(num) {
  if(num===1) {
    return 1;
  }
  return num * iFac(num-1);
}

iFac(5);
