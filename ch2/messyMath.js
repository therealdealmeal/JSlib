function messyMath(num) {
  var sum = 0;

  for(i=0; i<=num; i++) {
    if(i%3===0) {
      continue;
    }
    if(i%7===0) {
      sum += i*2;
    } else {
      sum += i;
    }
    if(num/3===i) {
      sum = -1;
      break;
    }
  }
  console.log(sum);
}


messyMath(4);
messyMath(8);
messyMath(15);
