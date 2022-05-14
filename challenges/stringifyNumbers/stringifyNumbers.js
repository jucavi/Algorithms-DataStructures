function stringifyNumbers(obj) {
  let newObj = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value.constructor === Object) {
      newObj[key] = stringifyNumbers(value);
    } else if (Number.isInteger(value)) {
      newObj[key] = value.toString();
    } else {
      newObj[key] = value;
    }
  }
  return newObj;
}
