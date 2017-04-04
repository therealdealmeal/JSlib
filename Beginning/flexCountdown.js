function flex(lowNum, highNum, mult) {
  for(i=highNum; i>=lowNum; i--) {
    if(i%mult===0) {
      console.log(i);
    }
  }
}

flex(2,9,3);
