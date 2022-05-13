function minSubArrayLen(arr, num) {
  let minLen = arr.length;
  let maxSum = 0;
  for (let val of arr) {
    maxSum += val;
  }

  if (maxSum < num) return 0;
  if (maxSum === num) return minLen;

  let i = 0;
  let j = 0;
  let tempSum = arr[i];

  while (j < arr.length) {
    if (tempSum >= num) {
      const tempLen = j - i;
      minLen = minLen > tempLen ? tempLen : minLen;
      i++;
      j = i + 1;
      tempSum = arr[i];
    } else {
      tempSum += arr[j];
      j++;
    }
  }
  return minLen;
}
