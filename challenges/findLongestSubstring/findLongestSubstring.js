function findLongestSubstring(str) {
  if (str === '') return 0;
  console.log(str);
  let maxLen = 0;
  let i = 0;
  let j = 1;
  let tmpChars = [str[i]];

  while (j < str.length) {
    let currentLen = tmpChars.length;
    if (tmpChars.indexOf(str[j]) !== -1) {
      i++;
      j = i + 1;
      tmpChars = [str[i]];
    } else {
      tmpChars.push(str[j]);
      currentLen = tmpChars.length;
      j++;
    }
    maxLen = currentLen > maxLen ? currentLen : maxLen;
  }
  return maxLen;
}


// COURSE SOLUTION
// function minSubArrayLen(nums, sum) {
//   let total = 0;
//   let start = 0;
//   let end = 0;
//   let minLen = Infinity;

//   while (start < nums.length) {
//     // if current window doesn't add up to the given sum then
//     // move the window to right
//     if (total < sum && end < nums.length) {
//       total += nums[end];
//       end++;
//     }
//     // if current window adds up to at least the sum given then
//     // we can shrink the window
//     else if (total >= sum) {
//       minLen = Math.min(minLen, end - start);
//       total -= nums[start];
//       start++;
//     }
//     // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
//     else {
//       break;
//     }
//   }

//   return minLen === Infinity ? 0 : minLen;
// }