function getDigit(num, pos) {
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let maxDigits = 0;
  for (let val of arr) {
    let dgc = digitCount(val)
    if (dgc > maxDigits) maxDigits = dgc;
  }
  return maxDigits;
}

function radixSort(arr) {
  let maxDigitsCount = mostDigits(arr);

  for (let i = 0; i < maxDigitsCount; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let val of arr) {
      let digit = getDigit(val, i);
      buckets[digit].push(val)
    }
    arr = [].concat(...buckets)
  }
  return arr
}