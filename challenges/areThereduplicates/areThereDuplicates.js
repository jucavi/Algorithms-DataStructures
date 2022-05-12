function areThereDuplicates(...args) {
  if (args.length == 0) return false;

  const frecCounter = {};
  for (let val of args) {
    frecCounter[val] = (frecCounter[val] || 0) + 1;
    console.log(frecCounter);
    if (frecCounter[val] > 1) return true;
  }
  return false;
}

function areThereDuplicates(...args) {
  if (args.length == 0) return false;

  args.sort((a, b) => a > b);
  let current = 0;
  let next = 1
  while (next < args.length) {
    if (args[current] == args[next]) return true;
    current++
    next++
  }
  return false;
}
