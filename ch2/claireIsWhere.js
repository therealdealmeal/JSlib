var claire = {
  x: 0,
  y: 0
};

function reset() {
  claire.x = 0;
  claire.y = 0;
}

function moveBy(xOffset,yOffset) {
  claire.x += xOffset;
  claire.y += yOffset;
}

function xLocation() {
  console.log(claire.x);
}

function yLocation() {
  console.log(claire.y);
}

function distFromHome() {
   claire.diagMov =
}

reset();
moveBy(1,-2);
moveBy(3,1);
// xLocation();
// yLocation();
distFromHome();


STILL NEED TO FIGURE OUT DIAGONAL MOVEMENT
