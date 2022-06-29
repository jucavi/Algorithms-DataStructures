class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}


class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(node) {
    this.values.push(node);
    this.bubbleUp();
    return this;
  }

  dequeue() {
    let min = this.values[0];
    let last = this.values.pop();
    if (this.values.length > 0)
      this.values[0] = last
      this.bubbleDown();
    return min;
  }

  bubbleUp() {
    let index = this.values.length - 1;

    while (index > 0) {
      let parentIndex = this.parentIndex(index);

      let insertedNode = this.values[index];
      let parentNode = this.values[parentIndex];

      if (insertedNode.priority >= parentNode.priority) break;

      if (insertedNode.priority < parentNode.priority) {
        let tmpNode = insertedNode;
        this.values[index] = parentNode;
        this.values[parentIndex] = tmpNode;
        index = parentIndex;
      }
    }
  }

  bubbleDown() {
    let index = 0
    let size = this.values.length

    while (index < size) {
      let rightChild, leftChild;
      let leftChildIndex = this.leftChildIndex(index);
      let rightChildIndex = this.rightChildIndex(index);
      let currNode = this.values[index];
      let swap = null;

      if (rightChildIndex < size) {
        rightChild = this.values[rightChildIndex];
        if (rightChild.priority < currNode.priority) swap = rightChildIndex;
      }

      if (leftChildIndex < size) {
        leftChild = this.values[leftChildIndex];
        if (
          (swap === null && leftChild.priority < currNode.priority) ||
          (swap !== null && leftChild.priority < leftChild.priority)
        ) {
          swap = leftChildIndex;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = currNode
      index = swap;
    }

  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  rightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
}


pq = new PriorityQueue();
pq.enqueue(new Node('headache', 3));
pq.enqueue(new Node('flu', 2));
pq.enqueue(new Node('car accident', 1));
pq.enqueue(new Node('stab', 1));
pq.enqueue(new Node('headache1', 3));
pq.enqueue(new Node('flu1', 2));
pq.enqueue(new Node('car accident1', 1));
pq.enqueue(new Node('stab1', 1));

console.log()