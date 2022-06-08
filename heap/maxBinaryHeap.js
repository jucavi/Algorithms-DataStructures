class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
    return this;
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = this.parentOf(index);
      let parent = this.values[parentIndex];
      if (element < parent) break;
      this.values[index] = parent;
      this.values[parentIndex] = element;
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    let element = this.values[0];
    const length = this.values.length;
    while (index < length) {
      let left = this.leftChildOf(index);
      let right = this.rightChildOf(index);
      let maxValIndex = this.getMaxValIndex(left, right);
      let maxValElement = this.values[maxValIndex] || 0;
      if (element > maxValElement) break;
      this.values[index] = maxValElement;
      this.values[maxValIndex] = element;
      index = maxValIndex;
    }
  }

  getMaxValIndex(left, right) {
    let leftElement = this.values[left] || 0;
    let rightElement = this.values[right] || 0;
    if (leftElement >= rightElement) return left;
    return right;
  }

  parentOf(index) {
    return Math.floor((index - 1)/2);

  }

  leftChildOf(parentIndex) {
    return 2 * parentIndex + 1;
  }

  rightChildOf(parentIndex) {
    return 2 * parentIndex + 2;
  }
}