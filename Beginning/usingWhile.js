function theBigW(num, limit) {
  if(limit>0) {
    while(num<=limit) {
      console.log(num);
      num += 1;
    }
  } else {
    while(num>=limit) {
      console.log(num);
      num -= 1;
    }
  }
}


theBigW(-6, 9);
