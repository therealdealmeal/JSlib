function pNc(start, end) {
  for(i=start; i<=end; i++) {
    if(i%5===0) {
      console.log(i);
    }
  }
}

pNc(512, 4096);
