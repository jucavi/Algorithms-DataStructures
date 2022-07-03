function pivotHelper(arr, start=0, end=arr.length) {
  const swap = (i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(swapIdx, i);
    }
  }
  swap(start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left=0, right=arr.length) {
  if (left < right) {
    let pivotIdx = pivotHelper(arr, left, right);
    quickSort(arr, left, pivotIdx);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

let arr = [5, 4, 9, 10, 2, 20, 8, 7, 3];
console.log(quickSort(arr));
console.log(arr);