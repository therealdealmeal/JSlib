function drawLeftChars(num,char) {
  var stars = '';
  for(i=0; i<num; i++) {
    stars += char;
  }
  console.log(stars);
}

drawLeftChars(12,"Hi!");

*************************************************

function drawRightChars(num,char) {
  var stars = '';
  for(i=0; i<75; i++) {
    if(i >= 75-num) {
      stars += char;
    }
    stars += " ";
  }
  console.log(stars);
}

drawRightChars(10,"Cool");

*************************************************

function drawCenterChars(num,char) {
  var stars = '';
  range1 = (75-num)/2;
  for(i=0; i<75; i++) {
    if(i>=range1 && i<range1+num) {
      stars += char;
    } else {
      stars += " ";
    }
  }
  console.log(stars);
}

drawCenterChars(10,"Deal");
