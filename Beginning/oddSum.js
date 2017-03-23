var sum = 0;

function odd(start, finish) {
  if(Math.abs(start) == Math.abs(finish)) {
    return console.log(sum);
  }
  for(i=start; i<=finish; i++) {
    if(i%2!==0) {
     sum += i;
    }
  }
  return console.log(sum);
}

odd(-10, 8);
