function getDigit(num, i) {
  return Math.floor((num / Math.pow(10, i)) % 10);
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let max = 0;
  for (let val of arr) {
    let mdc = digitCount(val);
    if (mdc > max) max = mdc;
  }
  return max;
}

function radixSort(arr) {
  let maxDigits = mostDigits(arr);

  for (let i = 0; i < maxDigits; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let elm of arr) {
      let digit = getDigit(elm, i);
      buckets[digit].push(elm);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

console.log(radixSort([32, 45, 65, 78, 9, 12, 123, 43]));