function extractDigit(num, digitNum) {
  num = num.toString();
  if(digitNum>=num.length) {
    return 0;
  }
  return +num[num.length-1-digitNum];

}


extractDigit(48301,2);
extractDigit(48301,0);
extractDigit(48301,3);
