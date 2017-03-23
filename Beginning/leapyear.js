function leapyear(yr) {
  if(yr%4===0) {
    if(yr%100!==0 || yr%400===0) {
      console.log("This is a leap year!");
    } else {
      console.log("Nope");
    }
  } else {
    console.log("Nope");
  }
}

leapyear(2000);
