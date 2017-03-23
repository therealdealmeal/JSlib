
function multiples() {
  for(i=0; i>-301; i=i-3) {
    console.log(i);
  }
}

multiples();

*************************************************
a better way


function multiples(first, factor, limit) {
  if(limit<0) {
    for(i=first; i>=limit; i--) {
      if(i % factor === 0) {
        console.log(i);
      }
    }
  } if (limit>0) {
    for(i=first; i<=limit; i++) {
      if(i % factor === 0) {
        console.log(i);
      }
    }
  } else {
    return false;
  }
}

multiples(0, 3, -30);
