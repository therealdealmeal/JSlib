function finalC(mult,lowNum,highNum,skip) {
  while(lowNum<=highNum) {
    if(lowNum % mult === 0 && lowNum % skip !== 0) {
      console.log(lowNum);
    }
    lowNum += 1;
  }
}

finalC(3,5,18,9);
