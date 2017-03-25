var count = false;

function alwaysHungry(arr) {
  for(i=0; i<arr.length; i++) {
    if(arr[i] === "food") {
      console.log("yummy");
      count = true;
    }
  }
  if(count === false) {
      console.log("I'm hungry");
  }
}


alwaysHungry(["cake", "a", "b", "c"]);
