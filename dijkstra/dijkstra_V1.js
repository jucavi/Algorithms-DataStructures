
// O(n log(n)) sort cause. USE BINARY HEAP
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(name, priority) {
    this.values.push({ name, priority })
    this.sort();
  }
  dequeue() {
    return this.values.shift()
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class weightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    // SAME: this.adjacencyList[vertex1].push({ node: vertex2, weight: weight })
    this.adjacencyList[vertex1].push({ node: vertex2, weight })
    this.adjacencyList[vertex2].push({ node: vertex1, weight })
  }
  Dijkstra(start, finish) {
    const previous = {};
    const distances = {};
    const path = [];
    const nodes = new PriorityQueue();

    // build up initial state
    Object.keys(this.adjacencyList).forEach(vertex => {
      previous[vertex] = null;
      distances[vertex] = (vertex === start) ? 0 : Infinity;
      nodes.enqueue(vertex, (vertex === start) ? 0 : Infinity);
    });
    // console.log(previous);
    // console.log(distances);
    // console.log(nodes);

    // as long as there is something to visit
    while (nodes.values.length) {
      let smallest = nodes.dequeue().name;
      if (smallest === finish) {
        // WE ARE DONE
        // BUILD UP PATH TO RETUTN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        this.adjacencyList[smallest].forEach(neighbour => {
          // calculate new distance to neighbour node
          let candidate = distances[smallest] + neighbour.weight;
          if (candidate < distances[neighbour.node]) {
            // updating new smallest distance to neighbour
            distances[neighbour.node] = candidate;
            // updating previous - how we got  to neighbour
            previous[neighbour.node] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(neighbour.node, candidate);
          }
        });
      }
    }
    return path.concat(start).reverse()
  }
}

//           A
//         /   \
//        /     4
//       2        \
//      /           B
//     /             \3
//    C --2-- D --3-- E
//     \      |      /
//      4     1     1
//        \   |   /
//          \ | /
//            F

wg = new weightedGraph();
wg.addVertex('A');
wg.addVertex('B');
wg.addVertex('C');
wg.addVertex('D');
wg.addVertex('E');
wg.addVertex('F');

wg.addEdge('A', 'C', 2);
wg.addEdge('A', 'B', 4);
wg.addEdge('B', 'E', 3);
wg.addEdge('C', 'D', 2);
wg.addEdge('C', 'F', 4);
wg.addEdge('D', 'E', 3);
wg.addEdge('D', 'F', 1);
wg.addEdge('E', 'F', 1);

path = wg.Dijkstra('B', 'C')
console.log(path)
