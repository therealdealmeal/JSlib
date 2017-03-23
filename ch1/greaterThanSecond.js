oldArr = [1,3,5,7,9,13];
newArr = [];

function compare() {
  for(i=0; i<oldArr.length; i++) {
    if(oldArr[i] > oldArr[1]) {
      newArr.push(oldArr[i]);
    }
  }
  console.log(newArr);
}


compare();
