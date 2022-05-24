function validAnagram(firstString, secondString) {
  if (firstString.length !== secondString.length) return false;

  lookup = {};
  for (let char of firstString) {
    lookup[char] = lookup[char] ? lookup[char]++ : 1;
  }

  for (let char of secondString) {
    if (!lookup[char]) return false;
    lookup[char]--;
  }
  return true;
}

validAnagram('', ''); // true
validAnagram('azz', 'zaa'); // false
validAnagram('anagram', 'nagaram'); // true
validAnagram('rat', 'car'); // false
validAnagram('awesome', 'awesom'); // false
validAnagram('qwerty', 'qeywrt'); // true
validAnagram('texttwisttimme', 'timetiwsttext'); // true