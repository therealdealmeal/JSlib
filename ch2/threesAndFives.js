function threesAndFives(start,end) {
  var sum = 0;
  for(i=start; i<=end; i++) {
    if(i%3===0 && i%5!==0) {
      sum += i;
      console.log(sum);
    }
    if(i%5===0 && i%3!==0) {
      sum += i;
      console.log(sum);
    }
  }
  console.log(sum);
}

threesAndFives(1,12);
