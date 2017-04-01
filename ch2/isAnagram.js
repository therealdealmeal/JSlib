// time complexity: O(nlogn)
let isAnagrams1 = (s,t) => {
  s = s.toUpperCase().split('').sort().join('');
  t = t.toUpperCase().split('').sort().join('');
  return s === t;
};

// time complexity: O(n) - linear
let  isAnagrams2 = (s,t) => {
  let hist = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char in hist) {
      hist[char]++;
    } else {
      hist[char] = 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    let char = t[i];
    if (char in hist) {
      hist[char]--;
    } else {
      return false;
    }
  }
  for (let key in hist) {
    if (hist[key]) {
      return false;
    }
  }
  return true;
};





console.log(
  isAnagrams2('abc', 'cab'),
  isAnagrams2('aab', 'aac')
);
