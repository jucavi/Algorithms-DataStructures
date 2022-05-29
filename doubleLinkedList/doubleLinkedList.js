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
    if (!(0 <= index < this.length)) return null;
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
      count = 0
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


}