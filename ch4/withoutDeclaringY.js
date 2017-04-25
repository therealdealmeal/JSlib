// function sum being able to invoke within two different syntaxes


function sum(x,y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function(y) { return x+y }
  }
}

console.log(sum(2,3));
console.log(sum(2)(3));
