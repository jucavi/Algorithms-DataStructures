class Node {
  constructor(val) {
    this.value = val;
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
      this.first = node;
    }
    this.size++;
    return this.size;
  }
  pop() {
    if (!this.first) return null;
    let removed = this.first;

    if (this.fisrt === this.last) {
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return removed.val;
  }
}

let stack = new Stack();
stack.push(10);
stack.size;
stack.push(100);
stack.size;
stack.push(1000);
stack.size;
stack.push(10000);
stack.size;
