/* the complexities are for using adjacency list, 
if adjacency matrix was used, complexities were different */

// when to use DFS and when to use BFS
//https://stackoverflow.com/questions/3332947/when-is-it-practical-to-use-depth-first-search-dfs-vs-breadth-first-search-bf#:~:text=BFS%20can%20be%20used%20to,nodes%20in%20an%20acyclic%20graph.

// This is a undirected weighted graph
const Queue = require("../../chapter3StackQueue/Queue/Queue");
const PriorityQueueMin = require("../../chapter4Trees/PriorityQueue/PriorityQueueMin");

class GraphWeightUndirect {
  constructor() {
    this.adjacencyList = {};
  }
  //adding vertex, O(1)
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    } else {
      return false;
    }
  }
  //adding edge,O(1)
  addEdge(v1, v2,weight) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      if (
        this.adjacencyList[v1].includes({node:v2,weight}) &&
        this.adjacencyList[v2].includes({node:v1,weight})
      ) {
        return true;
      } else {
        this.adjacencyList[v1].push({node:v2,weight});
        this.adjacencyList[v2].push({node:v1,weight});
        return true;
      }
    } else {
      return undefined;
    }
  }
  //removing edge,O(E)
  removeEdge(v1, v2) {
    if(!this.adjacencyList[v1] || !this.adjacencyList[v2]){
        return undefined;
    }else{
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v.node !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v.node !== v1);
        return true;
    }
  }
  //removing vertex, O(V + E)
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return undefined;
    }
    while (this.adjacencyList[vertex].length !== 0) {
      let adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex.node);
    }
    delete this.adjacencyList[vertex];
    return true;
  }

  //DFS uses stacks when done iteratively, O(V + E)
  depthFirstRecursive(start) {
    let result = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;
    function dfs(vertex) {
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((n) => {
        if (!visited[n.node]) {
          dfs(n.node);
        }
      });
    }
    dfs(start);
    return result;
  }

  //DFS uses stacks when done iteratively, O(V + E)
  depthFirstIterative(start) {
    let result = [];
    let visited = {};
    let stack = [start];
    visited[start] = true;
    while (stack.length !== 0) {
      let current = stack.pop();
      result.push(current);
      this.adjacencyList[current].forEach((n) => {
        if (!visited[n.node]) {
          visited[n.node] = true;
          stack.push(n.node);
        }
      });
    }
    return result;
  }

  //BFS uses Queue when done, O(V + E)
  breadthFirst(start){
    let q = new Queue();
    q.enqueue(start);
    let result = [];
    let visited = {};
    visited[start] = true;
    while(q.length){
      let current =q.dequeue();
      result.push(current);
      this.adjacencyList[current].forEach(n =>{
        if(!visited[n.node]){
          visited[n.node] = true;
          q.enqueue(n.node);
        }
      })
    }
    return result;
  }
  
  /* Time complexity of dijkstra's algorithm is O(V2),
  but with the use of min priority queue, it drops to O(V + Elog(V))
  */
  Dijkstra(start,finish){
    let minGenerator = new PriorityQueueMin();
    let smallest;
    let shortestDistance = {};
    let previous = {};
    let path = [];
    for(let vertex in this.adjacencyList){
        if(vertex === start){
          shortestDistance[vertex] = 0;
          minGenerator.enqueue(vertex,0);
        }else{
          shortestDistance[vertex] = Infinity;
          minGenerator.enqueue(vertex,Infinity);
        }
        previous[vertex] = null;
    }
    // console.log("shortest distances are:",shortestDistance);
    // console.log("the previous object is",previous);
    // initial setup done

    while(minGenerator.values.length){
      smallest = minGenerator.dequeueMin().val;
      if(smallest === finish){
        //this is the end case
        while(previous[smallest]){
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if(smallest || shortestDistance[smallest] !== Infinity){
        for(let n in this.adjacencyList[smallest]){
          // here n is a index, not the content of the array
          // experiment yourself in the browser
          let nextNode = this.adjacencyList[smallest][n];
          let candidate = shortestDistance[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;

          if(candidate < shortestDistance[nextNeighbor]){
            shortestDistance[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            minGenerator.enqueue(nextNeighbor,candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

module.exports = GraphWeightUndirect;
