class HashTable {
  constructor(size=30) {
    this.keyMap = [];
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96;
      total = Math.abs(total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);

    return this
  }

  get(key) {
    let index = this._hash(key);
    if (!this.keyMap[index]) return undefined;
    for (let h of this.keyMap[index]) {
      let [k, v] = h;
      if (k === key) return v;
    }
    return undefined;
  }

  keys() {
    let _keys = []
    for (let items of this.keyMap) {
      if (items) {
        for (let item in items) {
          _keys.push(item[0])
        }
      }
    }
    return _keys;
  }

  values() {
    let _values = [];
    for (let items of this.keyMap) {
      if (items) {
        for (let item in items) {
          _values.push(item[1]);
        }
      }
    }
    return _values;
  }
}