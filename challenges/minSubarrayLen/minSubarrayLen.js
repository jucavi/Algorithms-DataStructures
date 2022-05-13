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

// COURSE SOLUTION
// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);
//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   return longest;
// }