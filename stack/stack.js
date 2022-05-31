class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return undefined;
    let current = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = current.next;
      current.next = null;
    }
    this.size--;
    return current
  }
}