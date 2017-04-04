function whatHappensToday() {
  var x =Math.floor((Math.random() * 100) + 1);
  console.log(x);
  if(x<=10) {
    console.log("volcano disaster");
  }
  if(x<=25 && x>10) {
    console.log("tsunami disaster");
  }
  if(x<=45 && x>25) {
    console.log("earthquake disaster");
  }
  if(x<=70 && x>45) {
    console.log("blizzard disaster");
  }
  if(x>70) {
    console.log("meteor strike disaster");
  }
}

whatHappensToday();
