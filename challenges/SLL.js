class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (!this.head || index < 0 || index >= this.length) return null;
    let currNode = this.head;
    let currIndex = 0;
    while (currIndex < this.length) {
      if (currIndex === index) return currNode;
      currNode = currNode.next;
      currIndex++;
    }
  }
  set(index, val) {
    if (index > this.length) {
      this.push(val);
      return false;
    }
    if (!this.head) {
      this.push(val);
      return true;
    }
    let node = this.get(index - 1);
    if (!node) return false;
    node.val = val;
    return true;
  }
  insert(index, val) {
    let insertedNode = new Node(val);

    if (index === 0) {
      insertedNode.next = this.head;
      this.head = insertedNode;
      this.length++;
      return true;
    }
    if (index === this.length) {
      this.push(val);
      return true;
    }

    let previusNode = this.get(index - 1);
    if (!previusNode) return false;

    insertedNode.next = previusNode.next;
    previusNode.next = insertedNode;
    this.length++;
    return true;
  }
  rotate(index) {
    if (index < 0) index = this.length + index;
    if (index <= 0 || index > this.length) return this;

    let tmpSLL = new SinglyLinkedList();
    let currNode = this.head;
    let currIndex = 0;

    while (currIndex < index) {
      tmpSLL.push(currNode.val);
      currNode = currNode.next;
      currIndex++;
    }
    this.head = currNode;
    this.tail.next = tmpSLL.head;
    this.tail = tmpSLL.tail;
    return this;
  }
}

let singlyLinkedList = new SinglyLinkedList();

// singlyLinkedList.push(5).push(10).push(15).push(20).push(25);

singlyLinkedList.set(0, 10);
singlyLinkedList.set(1, 2);
singlyLinkedList.head;
singlyLinkedList.set(10, 10);
singlyLinkedList.set(3, 100);
