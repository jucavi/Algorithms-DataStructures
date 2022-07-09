class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  _swap(i, j) {
    [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
  }

  _parentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  _leftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  _rightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  _upHeap() {
    if (this.values.length <= 0) return;
    let insertedIndex = this.values.length - 1;
    let inserted = this.values[insertedIndex];
    while (insertedIndex > 0) {
      let parentIndex = this._parentIndex(insertedIndex);
      if (parentIndex < 0) return;

      let parent = this.values[parentIndex];
      if (inserted > parent) {
        this._swap(parentIndex, insertedIndex);
        insertedIndex = parentIndex;
      }
    }
  }

  _downHeap() {
    if (this.values.length <= 0) return;
    let insertedIndex = 0;
    let inserted = this.values[insertedIndex];
    while (insertedIndex < this.values.length) {
      let leftChildIndex = this._leftChildIndex(insertedIndex);
      let rightChildIndex = this._rightChildIndex(insertedIndex);

      let leftChild = this.values[leftChildIndex];
      let rightChild = this.values[rightChildIndex];
      let maxChildIndex;

      if (!leftChild && !rightChild) return;
      if (leftChild && rightChild) {
         maxChildIndex = (leftChild >= rightChild) ? leftChildIndex : rightChildIndex;
      }
      if (!leftChild && rightChild) maxChildIndex = rightChildIndex;
      if (leftChild && !rightChild) maxChildIndex = leftChildIndex;

      if (!maxChildIndex) return;
      if (this.values[maxChildIndex] >= inserted) {
        this._swap(insertedIndex, maxChildIndex);
        insertedIndex = maxChildIndex;
      } else {
        return;
      }
    }
  }

  insert(value) {
    this.values.push(value);
    this._upHeap();
    return this;
  }

  extractMax() {
    if (this.values.length <= 0) return;
    this._swap(0, this.values.length - 1);
    console.log(this.values)
    let max = this.values.pop();
    this._downHeap();
    return max;
  }
}


let binaryHeap = new MaxBinaryHeap();
binaryHeap.insert(1);

binaryHeap.insert(2);
binaryHeap.insert(3);
binaryHeap.insert(4);
binaryHeap.insert(5);
binaryHeap.insert(6);
console.log(binaryHeap.values)
binaryHeap.extractMax();
console.log(binaryHeap.values[0])
binaryHeap.extractMax();
console.log(binaryHeap.values[0])
binaryHeap.extractMax();
console.log(binaryHeap.values[0])
binaryHeap.extractMax();
console.log(binaryHeap.values[0])
binaryHeap.extractMax();
console.log(binaryHeap.values[0])
binaryHeap.extractMax();
console.log(binaryHeap.values[0])
binaryHeap.extractMax();
console.log(binaryHeap.values[0])