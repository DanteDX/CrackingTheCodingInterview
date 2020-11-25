/* the complexities are for using adjacency list, 
if adjacency matrix was used, complexities were different */

// when to use DFS and when to use BFS
//https://stackoverflow.com/questions/3332947/when-is-it-practical-to-use-depth-first-search-dfs-vs-breadth-first-search-bf#:~:text=BFS%20can%20be%20used%20to,nodes%20in%20an%20acyclic%20graph.

// This is a undirected weighted graph
const Queue = require("../../chapter3StackQueue/Queue/Queue");
const PriorityQueueMin = require("../../chapter4Trees/PriorityQueue/PriorityQueueMin");
const DisjointSet = require("../../DisjointSet");

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

  //Time complexity,O(|V| |E|), slower than dijkstra, but works with negative edge weight
  bellmanFord(startVertex,endVertex){
    let distances = {};
    let previousVertices = {};
    distances[startVertex] = 0;
    Object.keys(this.adjacencyList).forEach(vertex =>{
      previousVertices[vertex] = null;
      if(vertex !== startVertex){
        distances[vertex] = Infinity;
      }
    });
    // initial setup done
    // we need (|v| - 1) iterations

    const iterationNumber = Object.keys(this.adjacencyList).length - 1;

    for(let iteration = 0;iteration < iterationNumber;iteration++){
      Object.keys(distances).forEach(vertex =>{
        this.adjacencyList[vertex].forEach(obj =>{
          let neighbor = obj.node;
          let weight = obj.weight;
          let distanceToVertex = distances[vertex];
          let distanceToNeighbor = distanceToVertex + weight;
          if(distanceToNeighbor < distances[neighbor]){
            distances[neighbor] = distanceToNeighbor;
            previousVertices[neighbor] = vertex;
          }
        })
      })
    }

    let path = [endVertex];
    while(endVertex !== null){
      path.push(previousVertices[endVertex]);
      endVertex = previousVertices[endVertex];
    }
    path.pop();
    return {
      distances,
      previousVertices,
      path:path.reverse()
    }
  }
  //time complexity, O(n3)
  // FloydWarshall is used to find all shortest distances between all pairs
  floydWarshall() {
    const vertices = Object.keys(this.adjacencyList);
    let nextVertices = new Array(vertices.length).fill(null).map(() => {
      return new Array(vertices.length).fill(null);
    });
    let distances = new Array(vertices.length).fill(null).map(() => {
      return new Array(vertices.length).fill(Infinity);
    });

    vertices.forEach((startVertex, startIndex) => {
      vertices.forEach((endVertex, endIndex) => {
        if (startVertex === endVertex) {
          distances[startIndex][endIndex] = 0;
        } else {
          /* we have to find out whethere there exists en edge or not */
          let exist = this.adjacencyList[startVertex].filter(
            (obj) => obj.node === endVertex
          );
          if (exist.length === 1) {
            // edge exists
            distances[startIndex][endIndex] = exist[0].weight;
            nextVertices[startIndex][endIndex] = startVertex;
          } else {
            distances[startIndex][endIndex] = Infinity;
          }
        }
      });
    });
    console.log("All Vertices all:");
    console.log(vertices);
    console.log("Initially Next vertices matrix is:");
    console.log(nextVertices);
    console.log("Initially Distances matrix is: ");
    console.log(distances);

    vertices.forEach((middleVertex,middleIndex) =>{
      vertices.forEach((startVertex,startIndex) =>{
        vertices.forEach((endVertex,endIndex) =>{
          let distViaMiddle = distances[startIndex][middleIndex] + distances[middleIndex][endIndex];
          if(distViaMiddle < distances[startIndex][endIndex]){
            distances[startIndex][endIndex] = distViaMiddle;
            nextVertices[startIndex][endIndex] = middleVertex;
          }
        })
      })
    });
    console.log('After the algorithm ran, result is: ');
    return {distances,nextVertices};
  }

  //finding the minimum spanning tree using kruskal's algorithm
  // we have to use Disjoint set to use this algorithm
  // Time Complexity O(E log(E))
  // Space COmplexity O(E + V)
  Kruskal(){
    let djs = new DisjointSet(...Object.keys(this.adjacencyList));
    let MST = new GraphWeightUndirect();
    let minGenerator = new PriorityQueueMin();
    //crate all edges as an array
    let allEdges = Object.keys(this.adjacencyList).map(eachVertex =>{
      return this.adjacencyList[eachVertex].map(eachVertexEdge =>{
          return {edge: eachVertex + eachVertexEdge.node, weight:eachVertexEdge.weight}
      })
    });
    // this allEdges computation might not be included in the original time of 
    // the algorithm
    allEdges = allEdges.reduce((x,y) => [...x,...y]);
    console.log('All Edges of the graph are:');
    console.log(allEdges);
    allEdges.forEach(eachEdge => minGenerator.enqueue(eachEdge.edge,eachEdge.weight));
    // each time priorityQueueMin is dequed it will give smaller to larger weighted edge
    console.log('edges coming out of the PriorityQueueMin');
    while (!minGenerator.length) {
      let nextEdge = minGenerator.dequeueMin();
      if(nextEdge === undefined) break;
      console.log(nextEdge);
      let nodes = nextEdge.val;
      let weight = nextEdge.priority;

      if (!djs.connected(nodes[0], nodes[1])) {
         MST.addVertex(nodes[0]);
         MST.addVertex(nodes[1]);
         MST.addEdge(nodes[0], nodes[1], weight);
         djs.union(nodes[0], nodes[1]);
      }
   }
   console.log('Following is the minimum spanning tree from kruskal');
   return MST.adjacencyList;
  }
}

module.exports = GraphWeightUndirect;
