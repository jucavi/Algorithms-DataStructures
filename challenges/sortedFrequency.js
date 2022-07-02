function sortedFrequency(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let middle; 
  let found = false;

  if (target > arr[end - 1]) return -1;
  if (target < arr[start]) return -1;

  while (start < end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) {
      found = true;
      break;
    }
    if (arr[middle] > target) end = middle - 1;
    if (arr[middle] < target) start = middle + 1;
  }

  if (!found) return -1;
  start = middle - 1;
  end = middle + 1;
  while (true) {
    if (arr[start] !== target && arr[end] !== target) break;
    if (arr[start] === target) start--;
    if (arr[end] === target) end++;
  }
  return end - start - 1;
}

console.log(sortedFrequency([1,1,2,2,2,2,3], 2));
console.log(sortedFrequency([1,1,2,2,2,2,3], 6));
console.log(sortedFrequency([1,1,2,2,2,2,3], 0));
console.log(sortedFrequency([1,1,2,2,2,2,3], 3));
console.log(sortedFrequency([1,1,2,2,2,2,3], 1));
console.log(sortedFrequency([1,1,2,2,2,2,3], 3));