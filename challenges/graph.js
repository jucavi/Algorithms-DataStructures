class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  // depthFirstSearch(start){
  //     let visited = {};
  //     let result = [];
  //     let stack = [start];

  //     while (stack.length > 0) {
  //         let vertex = stack.pop();
  //         if (!visited[vertex]) {
  //             visited[vertex] = true;
  //             result.push(vertex);
  //             stack.push(...this.adjacencyList[vertex]);
  //         }
  //     }
  //     console.log(result);
  //     return result;
  // }

  depthFirstSearch(start) {
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
}
