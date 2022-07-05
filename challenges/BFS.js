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
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = new Node(value);
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value);
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  breadthFirstSearch() {
    let queue = new Queue();
    let node;
    let visited = [];

    queue.enqueue(this.root);
    while (queue.size > 0) {
      node = queue.dequeue().value;
      visited.push(node.value);
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }
    return visited;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
    } else {
      this.last.next = node;
    }
    this.last = node;
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return undefined;
    let current = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return current;
  }
}
