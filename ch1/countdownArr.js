arr = [];
function countdown(num) {
  while(num>=0) {
    arr.push(num);
    num -= 1;
  }
}

countdown(10);
console.log(arr);
console.log(arr.length);
