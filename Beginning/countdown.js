function countdown(factor, start) {
  while(start>0) {
    console.log(start);
    start -= factor;
  }
}

countdown(4, 200);
