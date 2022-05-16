// function sort(arr) {
//   const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

//   for (let i = 1; i < arr.length; i++){
//     for (let j = i - 1; j >= 0; j--) {
//       if (arr[j+1] < arr[j]) {
//         swap(arr, j, j + 1);
//       } else {
//         break;
//       }
//     }
//   }
//   return arr;
// }

function sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i]
    for (var j = i - 1; j >= 0 && arr[j] > currVal; j--) {
        arr[j+1] = arr[j]
    }
    arr[j+1] = currVal
  }
  return arr;
}