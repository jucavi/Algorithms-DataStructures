function bubbleSort(arr, callback) {
  if (typeof callback !== 'function') {
    callback = (a, b) => a - b;
  }

  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (callback(arr[j], arr[j + 1]) > 0) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}

callback = (a, b) => b - a;
console.log(bubbleSort([3,6,1,2,8,1,12,23,3], callback))
