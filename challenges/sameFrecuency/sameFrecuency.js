function sameFrequency(num1, num2) {
  const str_num1 = num1.toString();
  const str_num2 = num2.toString();

  if (str_num1.length != str_num2.length) return false;

  const frecCounter1 = {};
  const frecCounter2 = {};

  for (let val of str_num1) {
    frecCounter1[val] = (frecCounter1[val] || 0) + 1;
  }

  for (let val of str_num2) {
    frecCounter2[val] = (frecCounter2[val] || 0) + 1;
  }

  for (let key in frecCounter1) {
    if (!(key in frecCounter2)) return false;
    if (frecCounter1[key] != frecCounter2[key]) return false;
  }
  return true;
}
