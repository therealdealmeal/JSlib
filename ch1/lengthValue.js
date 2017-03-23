arr = [];

function lenVal(num1,num2) {
  if(num1===num2) {
    console.log("jinx!");
  }
  for(i=0; i<num1; i++) {
    arr.push(num2);
  }
}


lenVal(4,"dojo");
console.log(arr);
