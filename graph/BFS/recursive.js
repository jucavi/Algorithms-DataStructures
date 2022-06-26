class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    for (let v of [vertex1, vertex2]) this.addVertex(v);

    if (!this.adjacencyList[vertex1].includes(vertex2))
      this.adjacencyList[vertex1].push(vertex2);
    if (!this.adjacencyList[vertex2].includes(vertex1))
      this.adjacencyList[vertex2].push(vertex1);
    return this;
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return undefined;

    // this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
    //   (vertex) => vertex !== vertex2
    // );
    // this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
    //   (vertex) => vertex !== vertex1
    // );

    for (let i = 0; i < vertex1.length; i++) {
      if (this.adjacencyList[vertex1][i] === vertex2)
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
          .slice(0, i)
          .concat(this.adjacencyList[vertex1].slice(i + 1));
    }

    for (let i = 0; i < vertex2.length; i++) {
      if (this.adjacencyList[vertex2][i] === vertex1)
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
          .slice(0, i)
          .concat(this.adjacencyList[vertex1].slice(i + 1));
    }
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;

    for (let currVertex of this.adjacencyList[vertex])
      this.removeEdge(currVertex, vertex);
    delete this.adjacencyList[vertex];
  }

  BFS(vertex) {
    
  }
}
