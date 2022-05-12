function isSubsequence(firstStr, secondStr) {
  if (firstStr.length > secondStr.length) return false;
  if (firstStr === secondStr) return true;
  let i = 0;
  let j = 0;

  while (j < secondStr.length) {
    if (firstStr[i] === secondStr[j]) i++;
    if (i == firstStr.length) return true;
    j++;
  }
  return false;
}
