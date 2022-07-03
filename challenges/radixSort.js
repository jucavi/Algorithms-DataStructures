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