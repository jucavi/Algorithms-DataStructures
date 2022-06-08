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

    while (true) {
      let parentIndex = this.parentOf(index);
      let swap = false;
      if (parentIndex === undefined) break;

      let insertedNode = this.values[index];
      let parentNode = this.values[parentIndex];

      if (insertedNode.priority < parentNode.priority) {
        let tmpNode = insertedNode;
        this.values[index] = parentNode;
        this.values[parentIndex] = tmpNode;
        index = parentIndex;
        swap = true;
      }
      if (!swap) break;
    }
  }

  bubbleDown() {
    let index = 0
    let swap = true;

    if (this.values.length <= 0) return undefined;

    while (swap) {
      let minIndex;
      let currPriority = this.values[0].priority;
      let leftChild = this.leftChildOf(index);
      let rightChild = this.rightChildOf(index);
      if (leftChild === undefined && rightChild === undefined) break

      swap = false;
      if ((leftChild !== undefined && rightChild === undefined) || (this.values[leftChild].priority <= this.values[rightChild].priority)) {
        minIndex = leftChild;
      } else if ((leftChild === undefined && rightChild !== undefined) || (this.values[leftChild].priority >= this.values[rightChild].priority)) {
        minIndex = rightChild;
      }

      if (currPriority > this.values[minIndex].priority) {
        console.log(this.values[minIndex]);
        swap = true
        let temp = this.values[index];
        this.values[index] = this.values[minIndex];
        this.values[minIndex] = temp;
        index = minIndex;
      }
    }

  }

  parentOf(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    if (parentIndex < 0) return undefined;
    return parentIndex
  }

  leftChildOf(parentIndex) {
    let childIndex = 2 * parentIndex + 1;
    if (childIndex >= this.values.length) return undefined;
    return childIndex;
  }

  rightChildOf(parentIndex) {
    let childIndex = 2 * parentIndex + 2;
    if (childIndex >= this.values.length) return undefined;
    return childIndex;
  }
}


pq = new PriorityQueue();
pq.enqueue(new Node('headache', 3));
pq.enqueue(new Node('flu', 2));
pq.enqueue(new Node('car accident', 1));
pq.enqueue(new Node('stab', 1));
pq.dequeue()
pq.dequeue()
pq.dequeue()
pq.dequeue()
pq.dequeue()
pq.dequeue()
pq.dequeue()