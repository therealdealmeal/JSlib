var myNumber = 42;
var myName = 'Al';

function swap() {
  var temp = myNumber;
  myNumber = myName;
  myName = temp;
  return console.log(myName);
}

swap();
