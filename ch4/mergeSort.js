function mergeSort(arr) {
  var len = arr.length;
  if(len<2) {
    return arr;
  }

  var mid = Math.floor(len/2);
  var left = arr.slice(0,mid);
  var right = arr.slice(mid);

  return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right) {
  var arr = [];
  var lLen = left.length;
  var rLen = right.length;
  var l = 0;
  var r = 0;

  while(l<lLen && r<rLen) {
    if(left[l] < right[r]) {
      arr.push(left[l]);
      l++;
    }
    else {
      arr.push(right[r]);
      r++;
    }
  }
  return arr.concat(left.slice(l)).concat(right.slice(r));
}

console.log(mergeSort([7,3,4,10,1,8,3,9,6,2,5]));
