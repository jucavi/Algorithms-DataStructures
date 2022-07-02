function findRotatedIndex(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) return middle;

    if (arr[start] <= arr[middle]) {
      if (target >= arr[start] && target <= arr[middle]) {
        end = middle;
        continue;
      }
      start = middle + 1;
      continue;
    }

    if (target >= arr[middle] && target <= arr[end]) {
      start = middle + 1;
      continue;
    }
    end = middle - 1;
  }
  return -1;
}

// function findRotatedIndex(arr, target, start = 0, end = arr.length - 1) {
//   if (start > end) return -1;

//   let middle = Math.floor((start + end) / 2);
//   if (arr[middle] === target) return middle;

//   if (arr[start] <= arr[middle]) {
//     if (target >= arr[start] && target <= arr[middle]) return findRotatedIndex(arr, target, start, middle)
//     findRotatedIndex(arr, target, middle + 1, end)
//   }

//   if (target >= arr[middle] && target <= arr[end]) return findRotatedIndex(arr, target, middle + 1, end)
//   findRotatedIndex(arr, target, start, middle - 1);
// }

console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16));
