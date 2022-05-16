function stringSearch(str, subStr) {
  match = 0;
  found = 0;
  fullMatch = subStr.length;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === subStr[match]) {
      match++;
    } else {
      match = 0;
    }
    if (match === fullMatch) {
      found++;
      match = 0;
    }
  }
  return found || -1;
}
