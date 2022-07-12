const denominations = [1, 5, 10, 25]

function minCoinChange(coins, amount) {
  let solution = [];
  let sum = 0;
  for (let i = coins.length - 1; i >= 0; i--) {
    while (coins[i] <= (amount - sum)) {
      sum += coins[i];
      solution.push(coins[i]);
    }
  }
  return solution;
}

console.log(minCoinChange(denominations, 35));