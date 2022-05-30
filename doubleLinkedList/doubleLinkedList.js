class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.tail;
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = current.prev;
      this.tail.next = null;
    }
    this.length--;
    current.prev = null;
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = current.next;
      this.head.prev = null;
    }
    this.length--;
    current.next = null;
    return current;
  }

  unshift(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count;
    let current;
    if (Math.floor(this.length / 2) < index) {
      count = this.length - 1;
      current = this.tail;

      while (count !== index) {
        current = current.prev;
        count--;
      }
    } else {
      count = 0;
      current = this.head;

      while (count !== index) {
        current = current.next;
        count++;
      }
    }
    return current;
  }

  set(index, value) {
    let current = this.get(index);
    if (current) {
      current.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index === 0) {
      return !!this.unshift(value);
    }

    if (index === this.length) {
      return !!this.push(value);
    }

    let current = this.get(index - 1, value);
    if (current) {
      let node = new Node(value);
      node.next = current.next;
      node.next.previus = node;
      node.previus = current;
      current.next = node;
      this.length++;
      return true;
    }
    return false;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    if (!previousNode) return undefined;

    let current = previousNode.next;
    previousNode.next = current.next;
    previousNode.next.prev = previousNode;
    this.length--;
    return current;
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    while (current) {
      let prev = current.prev;
      let next = current.next;
      current.prev = next;
      current.next = prev;
      current = current.prev;
    }
    return this;
  }
}
