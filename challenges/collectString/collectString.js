function collectStrings(obj) {
  let stringsArr = [];
  for (const [key, value] of Object.entries(obj)) {
    if (value.constructor === Object) {
      stringsArr = stringsArr.concat(collectStrings(value));
    } else if (typeof value === 'string') {
      stringsArr.push(value);
    }
  }
  return stringsArr;
}

const ob = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

collectStrings(ob); // ["foo", "bar", "baz"])
