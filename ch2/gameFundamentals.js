function rollOne() {
  return Math.floor(Math.random() * (7 - 1)) + 1;
}

function playFives(num) {
  for(i=1; i<=num; i++) {
    roll = rollOne();
    console.log(roll);
    if(roll===5) {
      console.log("That's Good Luck!");
    }
  }
}

function playStatistics() {
  max = 0;
  min = 6;
  for(i=1; i<8; i++) {
    roll = rollOne();
    if(roll>max) {
      max = roll;
    }
    if(roll<min) {
      min = roll;
    }
  }
  console.log(max);
  console.log(min);
}

function playStatistics2() {
  max = 0;
  min = 6;
  sum = 0;
  for(i=1; i<8; i++) {
    roll = rollOne();
    sum += roll;
    if(roll>max) {
      max = roll;
    }
    if(roll<min) {
      min = roll;
    }
  }
  console.log(max);
  console.log(min);
  console.log(sum);
}

function playStatistics3(num) {
  max = 0;
  min = 6;
  sum = 0;
  for(i=1; i<=num; i++) {
    roll = rollOne();
    sum += roll;
    if(roll>max) {
      max = roll;
    }
    if(roll<min) {
      min = roll;
    }
  }
  console.log(max);
  console.log(min);
  console.log(sum);
}

function playStatistics4(num) {
  max = 0;
  min = 6;
  sum = 0;
  arr = [];
  for(i=1; i<=num; i++) {
    roll = rollOne();
    sum += roll;
    arr.push(roll);
    if(roll>max) {
      max = roll;
    }
    if(roll<min) {
      min = roll;
    }
  }
  console.log(max);
  console.log(min);
  console.log(sum/num);
  console.log(arr);
}
