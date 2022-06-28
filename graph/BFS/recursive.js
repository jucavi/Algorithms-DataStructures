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

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;

    for (let currVertex of this.adjacencyList[vertex])
      this.removeEdge(currVertex, vertex);
    delete this.adjacencyList[vertex];
  }

  deppFirstRecursive(start) {
    const visited = {};
    const result = [];
    const adjacencyList = this.adjacencyList;

    function helper(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) return helper(neighbour);
      });
    }
    helper(start);
    return result;
  }

  deppFirstIterative(start) {
    const stack = [];
    const result = [];
    const visited = {};
    stack.push(start);

    while (stack.length > 0) {
      let vertex = result.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        stack.push(...this.adjacencyList[vertex]);
      }
    }
  }
}

g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

g.deppFirtsRecursive('A');