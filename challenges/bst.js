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
      } else {
        current = current.right;
      }
    }
  }

  findParent(value) {
    let current = this.root;
    let parent = null;
    while (true) {
      if (!current) return undefined;
      if (current.value === value) return parent;

      parent = current;
      if (current.value > value) {
        current = current.left;
      } else {
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

  _isLeaf(node) {
    return !(node.left || node.right);
  }

  _isFullNode(node) {
    return node.left && node.right;
  }

  _findMinRightSubTree(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  _findMaxLeftSubTree(node) {
    while (node.right) {
      node = node.right;
    }
    return node;
  }

  remove(value) {
    if (!this.root) return null;

    let removed = this.find(value);
    if (!removed) return null;

    let parent = this.findParent(value);
    if (this._isLeaf(removed)) {
      if (parent) {
        if (parent.left && parent.left.value === removed.value) parent.left = null;
        if (parent.right && parent.right.value === removed.value) parent.right = null;
      } else {
        // root
        this.root = null;
      }
      return removed;
    }

    if (!this._isFullNode(removed)) {
      if (parent) {
        if (parent.left && parent.left.value === removed.value) {
          if (removed.right) parent.left = removed.right;
          if (removed.left) parent.left = removed.left;
        }
        if (parent.right && parent.right.value === removed.value) {
          if (removed.right) parent.right = removed.right;
          if (removed.left) parent.right = removed.left;
        }
      } else {
        // root
        if (removed.right) this.root = removed.right;
        if (removed.left) this.root = removed.left;
      }
      return removed;
    } else {
      if (parent && parent.left && parent.left.value === removed.value) {
        let maxLeft = this._findMaxLeftSubTree(removed.right);
        this.remove(maxLeft.value);
        maxLeft.left = removed.left;
        maxLeft.right = removed.right;
        parent.left = maxLeft;
      }
      if (parent && parent.right && parent.right.value === removed.value) {
        let minRight = this._findMinRightSubTree(removed.right);
        this.remove(minRight.value);
        minRight.left = removed.left;
        minRight.right = removed.right;
        parent.right = minRight;
      }
      if (!parent) {
        let minRight = this._findMinRightSubTree(removed.right);
        this.remove(minRight.value);
        minRight.left = this.root.left;
        minRight.right = this.root.right;
        this.root = minRight;
      }
      return removed;
    }
  }
}

let binarySearchTree = new BinarySearchTree()
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);
binarySearchTree.remove(50);
console.log(binarySearchTree.root.right.value);
console.log(binarySearchTree.root.right.right);

binarySearchTree.remove(5);
console.log(binarySearchTree.root.left.left.value);
console.log(binarySearchTree.root.left.left.right);

binarySearchTree = new BinarySearchTree()
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);

binarySearchTree.remove(1);
console.log(binarySearchTree.root.left.left.value);
console.log(binarySearchTree.root.left.left.left);
console.log(binarySearchTree.root.left.left.right);

binarySearchTree.remove(20);
console.log(binarySearchTree.root.right.value);
console.log(binarySearchTree.root.right.right);
console.log(binarySearchTree.root.right.left);

binarySearchTree = new BinarySearchTree()
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50)
  .insert(60)
  .insert(30)
  .insert(25)
  .insert(23)
  .insert(24)
  .insert(70);

binarySearchTree.remove(10);
console.log(binarySearchTree.root.left.value);
console.log(binarySearchTree.root.left.left.value);
console.log(binarySearchTree.root.left.left.right.value);

binarySearchTree.remove(50);
console.log(binarySearchTree.root.right.value);
console.log(binarySearchTree.root.right.right.value);
console.log(binarySearchTree.root.right.right.left.value);