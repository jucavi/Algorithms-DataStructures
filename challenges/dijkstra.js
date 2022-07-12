/***
   *** Use Graph as a constructor for WeightedGraph to inherit from!
   ***
***/
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    numEdges() {
        let total = 0;

        Object.values(this.adjacencyList).forEach(list => {
            total += list.length;
        });
        // note that we've double-counted up til now since we've looked at
        // the adjacencyList for every node.
        return total / 2;
    }

    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(adjacentVertex, vertex);
        }
        delete this.adjacencyList[vertex];
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
}

/***
   *** Use the following as a PriorityQueue (it's a min heap)!
   ***
***/
class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph extends Graph {
  constructor() {
    super();
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra(start, end) {
    const previous = {};
    const distances = {};
    let distance = Infinity;
    const path = [];
    const nodes = new PriorityQueue();

    // Setup
    Object.keys(this.adjacencyList).forEach(vertex => {
      previous[vertex] = null;
      distances[vertex] = (vertex === start) ? 0 : Infinity;
      nodes.enqueue(vertex, distances[vertex]);
    });

    while (nodes.values.length) {
      let smallest = nodes.dequeue().val;
      if (smallest === end) {
        distance = 0;
        while (previous[smallest]) {
          path.push(previous[smallest]);
          distance += distances[smallest];
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        this.adjacencyList[smallest].forEach(neighbour => {
          let candidate = distances[smallest] + neighbour.weight;
          if (candidate < distances[neighbour.node]) {
            distances[neighbour.node] = candidate;
            previous[neighbour.node] = smallest;
            nodes.enqueue(neighbour.node, candidate)
          }
        });
      }
    }
    return [distances[end], [end].concat(path).reverse()];
  }
}

// let wg = new WeightedGraph();

// wg.addVertex('A');
// wg.addVertex('Z');
// wg.addVertex('C');
// wg.addVertex('D');
// wg.addVertex('E');
// wg.addVertex('H');
// wg.addVertex('Q');
// wg.addVertex('G');

// wg.addEdge('A', 'Z', 7);
// wg.addEdge('A', 'C', 8);

// wg.addEdge('Z', 'Q', 2);

// wg.addEdge('C', 'G', 4);

// wg.addEdge('D', 'Q', 8);

// wg.addEdge('E', 'H', 1);

// wg.addEdge('H', 'Q', 3);

// wg.addEdge('Q', 'C', 6);

// wg.addEdge('G', 'Q', 9);

// console.log(wg.Dijkstra('A', 'E'));
wg = new WeightedGraph();
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

path = wg.Dijkstra('A', 'E');
console.log(path);