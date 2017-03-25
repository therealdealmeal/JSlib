function onlyKeepLastFew(arr,x) {
  newArr = arr.slice(0,x);
  console.log(newArr);
}

onlyKeepLastFew([1,2,3,4,5,6],3);
