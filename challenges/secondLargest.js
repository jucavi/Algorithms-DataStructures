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
    // only accept numbers....watch out since NaN is typeof number!
    if (typeof value === 'number' && !isNaN(value)) {
      // if there is nothing in the tree, start it off with a new node!
      if (this.root === null) {
        this.root = new Node(value);
        return this;
      } else {
        // current variable used for traversal, just like linked lists!
        var current = this.root;
        // keep looping till we get to the correct spot;
        while (true) {
          if (value < current.value) {
            // if there is nothing on the left
            if (current.left === null) {
              // make a new node and get out
              current.left = new Node(value);
              return this;
            }
            // otherwise, keep moving on!
            else {
              current = current.left;
            }
          } else if (value > current.value) {
            // if there is nothing on the right
            if (current.right === null) {
              // make a new node and get out
              current.right = new Node(value);
              return this;
            } else {
              current = current.right;
            }
          }
          // otherwise it must be a duplicate so let's get out of here
          else {
            return 'duplicate!';
          }
        }
      }
    } else return 'Please insert a number';
    se;
  }
  _isLeaf(node) {
    return !(node.left || node.right);
  }
  findSecondLargest() {
    let current = this.root;
    if (!current || this._isLeaf(current)) return undefined;
    if (current.right) {
      let previus = current;
      while (current.right) {
        previus = current;
        current = current.right;
      }
      return previus.value;
    } else {
      if (this._isLeaf(current.left) || !current.left.right)
        return current.left.value;
      current = current.left;
      let previus = current;
      while (current.right) {
        previus = current;
        current = current.right;
      }
      return previus.value;
    }
  }
}