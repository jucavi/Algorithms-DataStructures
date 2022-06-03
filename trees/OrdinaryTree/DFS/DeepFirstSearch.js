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

  insert(value) {
    let node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return this;
    }
    let current = this.root;
    if (current.value === value) return this;
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
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    while (current) {
      if (current.value === value) return current;
      if (current.value > value) {
        current = current.left;
      } else if (current.value < value) {
        current = current.right;
      }
    }
    return false;
  }

  contains(value) {
    if (this.root === null) return false;
    let current = this.root;
    while (current) {
      if (current.value === value) return true;
      if (current.value > value) {
        current = current.left;
      } else if (current.value < value) {
        current = current.right;
      }
    }
    return false;
  }

  DFSPreOrder() {
    let visited = [];

    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

  DFSPostOrder() {
    let visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }
    traverse(this.root);
    return visited;
  }

  DFSInOrder() {
    let visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }
}


bs = new BinarySearchTree();
bs.insert(10);
bs.insert(6);
bs.insert(15);
bs.insert(3);
bs.insert(8);
bs.insert(20);
console.log(bs.DFSInOrder());