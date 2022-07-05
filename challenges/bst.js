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

    if (!this.root) {
      this.root = node;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value > current.value) {
          if (current.right) {
            current = current.right;
          } else {
            current.right = node;
            break;
          }
        }
        if (value < current.value) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = node;
            break;
          }
        }
      }
    }
    return this;
  }

  find(value) {
    let current = this.root;
    while (true) {
      if (!current) return undefined;
      if (current.value === value) return current;

      if (current.value > value) {
        current = current.left;
      }
      if (current.value < value) {
        current = current.right;
      }
    }
  }

  deepFirstSearchPreOrder() {
    let visited = [];
    function traverse(node) {
      if (node) {
        visited.push(node.value);
        traverse(node.left, visited);
        traverse(node.right, visited);
      }
    }
    traverse(this.root);
    return visited;
  }

  deepFirstSearchInOrder() {
    let visited = [];
    function traverse(node) {
      if (node) {
        traverse(node.left, visited);
        visited.push(node.value);
        traverse(node.right, visited);
      }
    }
    traverse(this.root);
    return visited;
  }

  deepFirstSearchPosttOrder() {
    let visited = [];
    function traverse(node) {
      if (node) {
        traverse(node.left, visited);
        traverse(node.right, visited);
        visited.push(node.value);
      }
    }
    traverse(this.root);
    return visited;
  }
}

let binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
console.log(binarySearchTree);
console.log(binarySearchTree.deepFirstSearchPreOrder());
console.log(binarySearchTree.root.right.value);
