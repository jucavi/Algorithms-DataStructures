function selectionSort(arr, callback) {
  if (typeof callback !== 'function') {
    callback = (a, b) => a - b;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (callback(arr[min], arr[j]) > 0) {
        min = j;
      }
    }
    if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

console.log(selectionSort([4, 1, 2, 7, 5, 12, 3, 4, 1]));
