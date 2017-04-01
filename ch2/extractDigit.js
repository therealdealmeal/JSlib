function extractDigit(num, digitNum) {
  arr = [];
  num = num.toString();

  if(digitNum<0) {
    for(i=num.length-1; i>=0; i--) {
      if(num[i]===num[num.indexOf('.')]) {
        break;
      }
      arr.push(num[i]);
    }

    console.log(+arr[arr.length+digitNum]);
    return +arr[arr.length+digitNum];
  }

  if(digitNum>=num.length) {
    console.log(0);
    return 0;
  }


  console.log(+num[num.indexOf(".")-digitNum-1]);
  return +num[num.indexOf(".")-digitNum-1];
}

extractDigit(48301.7356,-1);
extractDigit(48301.7356,-2);
extractDigit(48301.7356,-3);
extractDigit(48301.7356,-4);
extractDigit(48301.7356,0);
extractDigit(48301.7356,1);
extractDigit(48301.7356,2);
extractDigit(48301.7356,3);
extractDigit(48301.7356,4);
