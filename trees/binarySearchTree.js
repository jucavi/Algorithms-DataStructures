class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // TODO recursive
  insert(value) {
    let node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return this;
    }

    let current = this.root;
    while (true) {
      // Left branch
      if (current.value > value) {
        if (current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left;
      }
      // Right branch
      else if (current.value < value) {
        if (current.right === null) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
      // Duplicate
      else {
        // return undefined
        // add frecuency property to node
        // etc
        return this;
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    while (current) {
      if (current.value === value) return current;
      if (current.value > value) {
        current = current.left;
      }
      else if (current.value < value) {
        current = current.right;
      }
    }
    return false;
  }
}