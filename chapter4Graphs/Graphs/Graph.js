/* the complexities are for using adjacency list, 
if adjacency matrix was used, complexities were different */

// when to use DFS and when to use BFS
//https://stackoverflow.com/questions/3332947/when-is-it-practical-to-use-depth-first-search-dfs-vs-breadth-first-search-bf#:~:text=BFS%20can%20be%20used%20to,nodes%20in%20an%20acyclic%20graph.

// This is a undirected unweighted graph
const Queue = require("../../chapter3StackQueue/Queue/Queue");

class Graph {
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
  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      if (
        this.adjacencyList[v1].includes(v2) &&
        this.adjacencyList[v2].includes(v1)
      ) {
        return true;
      } else {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
        return true;
      }
    } else {
      return undefined;
    }
  }
  //removing edge,O(E)
  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) {
      return undefined;
    } else if (
      this.adjacencyList[v1].includes(v2) &&
      this.adjacencyList[v2].includes(v1)
    ) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
      return true;
    } else {
      return false;
    }
  }
  //removing vertex, O(V + E)
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return undefined;
    }
    while (this.adjacencyList[vertex].length !== 0) {
      let adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
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
        if (!visited[n]) {
          dfs(n);
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
        if (!visited[n]) {
          visited[n] = true;
          stack.push(n);
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
        if(!visited[n]){
          visited[n] = true;
          q.enqueue(n);
        }
      })
    }
    return result;
  }
}

module.exports = Graph;
