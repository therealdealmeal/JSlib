function moreAccurate(score) {
  if(score>=98) {
    console.log("You got an A+!");
  }
  if(score>92 && score<98) {
    console.log("You got an A!");
  }
  if(score>=90 && score<=92) {
    console.log("You got an A-!");
  }


  if(score<90 && score>=88) {
    console.log("You got a B+!");
  }
  if(score>82 && score<88) {
    console.log("You got an B!");
  }
  if(score>=80 && score<=82) {
    console.log("You got an B-!");
  }


  if(score<80 && score>=78) {
    console.log("You got a C+!");
  }
  if(score>72 && score<78) {
    console.log("You got an C!");
  }
  if(score>=70 && score<=72) {
    console.log("You got an C-!");
  }


  if(score<70 && score>=68) {
    console.log("You got a D+!");
  }
  if(score>62 && score<68) {
    console.log("You got an D!");
  }
  if(score>=60 && score<=62) {
    console.log("You got an D-!");
  }


  if(score<60) {
    console.log("You failed!");
  }
}

moreAccurate(86);
moreAccurate(60);
moreAccurate(23);
