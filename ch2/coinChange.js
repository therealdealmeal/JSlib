function generateCoinChange(cents) {
  change = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  };

  while(cents>0) {
    if(cents>=25) {
      cents -= 25;
      change.quarters += 1;
      console.log("You have " + cents);
    }
    if(cents<25 && cents>=10) {
      cents -= 10;
      change.dimes += 1;
      console.log("You have " + cents);
    }
    if(cents<10 && cents>=5) {
      cents -= 5;
      change.nickels += 1;
      console.log("You have " + cents);
    }
    if(cents<5) {
      cents -= 1;
      change.pennies += 1;
      console.log("You have " + cents);
    }
  }
  console.log(change.quarters);
  console.log(change.dimes);
  console.log(change.nickels);
  console.log(change.pennies);
}


generateCoinChange(132);
