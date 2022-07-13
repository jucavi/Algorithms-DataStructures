// function findPair(arr, dt) {
//   if (arr.length < 2) return false;
//   const track = {};
//   for (let num of arr) {
//     if (track[num + dt] || track[num - dt]) return true;
//     track[num] = true;
//   }
//   return false;
// }

function findPair(arr, dt) {
  let i = 0;
  let j = 1;
  arr.sort((a, b) => a - b);
  while (j < arr.length) {
    let sum = arr[i] - arr[j];
    if (sum === dt || arr[j] - arr[i] === dt) return true;
    if (Math.abs(sum) > Math.abs(dt)) i++;
    else j++;
  }
  return false;
}
console.log(findPair([6, 1, 4, 10, 2, 4], 2));
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1));
console.log(findPair([4, -2, 3, 10], -6));
console.log(findPair([6, 1, 4, 10, 2, 4], 22));
console.log(findPair([], 0));
console.log(findPair([5, 5], 0));
console.log(findPair([-4, 4], -8));
console.log(findPair([-4, 4], 8));
console.log(findPair([1, 3, 4, 6], -2));
console.log(findPair([0, 1, 3, 4, 6], -2));