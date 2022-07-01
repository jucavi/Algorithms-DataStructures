function countZeroes(arr) {
  let start = 0;
  let end = arr.length;

  if (arr[arr.lenght - 1]) return 0;
  if (!arr[0]) return arr.length;

  while (start < end) {
    let middle = Math.floor((end + start) / 2);
    if (arr[middle]) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return arr.length - end;
}
