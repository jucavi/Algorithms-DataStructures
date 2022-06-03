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

  BFS() {
    let visited = [],
        queue = [],
        node; // custom queue best aproach
    queue.push(this.root)
    
    while (queue.length) {
      node = queue.shift()
      visited.push(node)
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }
}

bs = new BinarySearchTree()
bs.insert(3)
bs.insert(13)
bs.insert(1)
bs.insert(4)
bs.insert(12)
bs.insert(14)
console.log(bs.BFS())