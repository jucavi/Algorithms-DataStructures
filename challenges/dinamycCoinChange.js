const denominations = [1, 5, 10, 25]

function coinChange(coins, value) {
  let chances = Array(value + 1).fill(0);
  chances[0] = 1;

  for (let i = 0; i < coins.length; i++) {
    for (let j = 1; j < chances.length; j++) {
      if (coins[i] <= j) {
        chances[j] = chances[j - coins[i]] + chances[j];
      }
    }
  }
  return chances[chances.length - 1];
}

console.log(coinChange(denominations, 25));