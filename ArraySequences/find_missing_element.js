function findMissingElements(arr) {
  // Make sure the numbers are in order
  arr = arr.slice(0).sort(function(a, b) { return a - b; });
  let next = 1; // The next number in the sequence
  let missing = [];
  for (let i = 0; i < arr.length; i++) {
    // While the expected element is less than
    // the current element
    while (next < arr[i]) {
      // Add it to the missing list and
      // increment to the next expected number
      missing.push(next);
      next++;
    }
    next++;
  }
  return missing;
}
