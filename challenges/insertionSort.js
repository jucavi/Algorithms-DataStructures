function insertionSort(arr, callback) {
  if (typeof callback !== 'function') callback = (a, b) => a - b;

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (callback(arr[j - 1], arr[j]) > 0) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      } else {
        break;
      }
    }
  }
  return arr
}

console.log(insertionSort([5,3,1,2,7,8,9,1,3]));