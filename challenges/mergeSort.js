function merge(arr1, arr2, callback) {
  if (typeof callback !== 'function') callback = (a, b) => a - b;

  let sortedAry = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    let greaterThan = callback(arr1[i], arr2[j]);
    if (greaterThan >= 0) {
      sortedAry.push(arr2[j]);
      j++;
    } else {
      sortedAry.push(arr1[i]);
      i++;
    }
  }

  while (i < arr1.length) {
    sortedAry.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    sortedAry.push(arr2[j]);
    j++;
  }

  return sortedAry;
}

function mergeSort(arr, callback) {
  let middle = Math.floor(arr.length / 2);
  if (arr.length <= 1) return arr;

  let left = mergeSort(arr.slice(0, middle), callback);
  let right = mergeSort(arr.slice(middle), callback);

  return merge(left, right, callback);
}
