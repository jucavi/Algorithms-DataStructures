function sort(arr) {
  let notSwaps;
  const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

  for (let i = arr.length; i > 0; i--) {
    notSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        notSwaps = false;
      }
    }
    if (notSwaps) break;
  }

  return arr
}