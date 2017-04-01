function mostSigDigit(num) {
  while(num>10 || num<-10) {
    num *= .1;
  }
  while(num<1 && num>-1) {
    num *= 10;
  }
  if(num>0) {
    num = Math.floor(num);
  }
  if(num<0) {
    num = Math.floor(-num);
  }
  console.log(num);
  return num;
}


mostSigDigit(67.89);  // 6
mostSigDigit(.00089);  // 8
mostSigDigit(-.00089);  // 8
mostSigDigit(-12.34);  // 1
mostSigDigit(0);  // 0
