function twentySidedDie() {
  var max = 0;
  var min = 6;
  var sum = 0;
  var rolls = 0;
  var runner = 0;
  var end = false;

  while(end===false) {
    roll = Math.floor(Math.random() * (21 - 1)) + 1;
    rolls += 1;
    sum += roll;
    if(roll>max) {
      max = roll;
    }
    if(roll<min) {
      min = roll;
    }
    if(roll===runner) {
      end = true;
    }
    runner = roll;
  }
  console.log(max);
  console.log(min);
  console.log(rolls);
  console.log(sum/rolls);
}

twentySidedDie();
