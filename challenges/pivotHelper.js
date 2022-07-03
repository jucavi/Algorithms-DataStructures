function pivot(arr, comparator, start = 0, end = arr.length) {
  if (typeof comparator !== 'function') comparator = (a, b) => a - b;

  function swap(i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  let pivIndex = start;
  let pivotValue = arr[start];

  for (let i = start + 1; i < end; i++) {
    if (comparator(arr[i], pivotValue) < 0) {
      pivIndex++;
      swap(i, pivIndex);
    }
  }
  swap(start, pivIndex);
  return pivIndex;
}

function quickSort(arr, comparator, start = 0, end = arr.length) {
  if (start < end) {
    let pivotIndex = pivot(arr, comparator, start, end);
    quickSort(arr, comparator, start, pivotIndex);
    quickSort(arr, comparator, pivotIndex + 1, end);
  }
  return arr;
}

let arr = [5, 4, 9, 10, 2, 20, 8, 7, 3];
console.log(quickSort(arr));
