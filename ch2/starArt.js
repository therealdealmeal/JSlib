function drawLeftStars(num) {
  var stars = '';
  for(i=0; i<num; i++) {
    stars += "'*'";
  }
  console.log(stars);
}

drawLeftStars(12);

*************************************************

function drawRightStars(num) {
  var stars = '';
  for(i=0; i<75; i++) {
    if(i >= 75-num) {
      stars += "*";
    }
    stars += " ";
  }
  console.log(stars);
}

drawRightStars(10);

*************************************************

function drawCenterStars(num) {
  var stars = '';
  range1 = (75-num)/2;
  for(i=0; i<75; i++) {
    if(i>=range1 && i<range1+num) {
      stars += "*";
    } else {
      stars += " ";
    }
  }
  console.log(stars);
}

drawCenterStars(10);
