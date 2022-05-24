function countUniqueValues(ary) {
  if (ary.length < 2) return ary.length;

  let i = 0;
  uniqueAry = [ary[0]];
  for (let j = 1; j < ary.length; j++) {
    if (uniqueAry[i] !== ary[j]) {
      uniqueAry.push(ary[j]);
      i++;
    }
  }
  return i + 1;
}

countUniqueValues([1, 1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
