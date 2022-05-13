function maxSubarraySum(arr, len) {
  if (len > arr.length) return null;

  let maxSum = 0;
  for (let i = 0; i < len; i++) {
    maxSum += arr[i];
  }

  let tempSum = maxSum;
  for (let j = len; j < arr.length; j++) {
    tempSum = tempSum - arr[j - len] + arr[j];
    if (tempSum > maxSum) maxSum = tempSum;
  }
  return maxSum;
}
