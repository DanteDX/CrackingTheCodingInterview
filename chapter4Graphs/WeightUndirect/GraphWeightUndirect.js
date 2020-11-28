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
    this.time = 0;
    this.EdgeNumber = 0;
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
        this.EdgeNumber++;
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

  //finding minimum spanning tree using Prim's algorithm
  //Time complexity O(E log(V))
  // space complexity O(E + V)
  Prim(){
    // first push all vertices in the PriorityQueueMin
    let minGenerator = new PriorityQueueMin();
    let firstVertex = Object.keys(this.adjacencyList)[0];
    for(let vertex in this.adjacencyList){
      if(vertex === firstVertex){
        minGenerator.enqueue(vertex,0);
        continue;
      }
      minGenerator.enqueue(vertex,Infinity);
    }
    // console.log('Inside the priorityQueueMin initially');
    // console.log(minGenerator.values);
    
    //the result will be here
    let result = [];

    // VE map
    let VEMap = {};
    Object.keys(this.adjacencyList).forEach(eachNode => VEMap[eachNode] = null);
    // console.log('Initially the VEMap is:');
    // console.log(VEMap);

    while(minGenerator.values.length !== 0){
      let currentVertex = minGenerator.dequeueMin();
      if(currentVertex.val !== firstVertex){
        result.push(VEMap[currentVertex.val]);
      }
      this.adjacencyList[currentVertex.val].forEach(obj =>{
        if(obj.weight < minGenerator.checkPriority(obj.node)){
          // console.log('this is going in the minpriorityqueue update');
          // console.log({val:obj.node,priority:obj.weight});
          minGenerator.enqueue(obj.node,obj.weight);
          // console.log(minGenerator.values);
          VEMap[obj.node] = currentVertex.val + obj.node;
        } 
      })
    }
    // console.log(VEMap);
    return result;
  }

  DetectCycle(){
    let djs = new DisjointSet(...Object.keys(this.adjacencyList));
    //crate all edges as an array
    let allEdges = Object.keys(this.adjacencyList).map(eachVertex =>{
      return this.adjacencyList[eachVertex].map(eachVertexEdge =>{
          return eachVertex + eachVertexEdge.node;
      })
    });
    allEdges = allEdges.reduce((x,y) => [...x,...y]);
    console.log('All edges are:');
    console.log(allEdges);
    let filteredEdges = [];
    for(let edge of allEdges){
      let edgeTemp = edge.split("").reverse().join("");
      if(filteredEdges.includes(edge) === false && filteredEdges.includes(edgeTemp) === false){
        filteredEdges.push(edge);
      }
    }
    console.log('Filtered edges are: ');
    console.log(filteredEdges);
    for(let vertexObj of filteredEdges){
      let edge = vertexObj.split("");
      if(djs.connected(edge[0],edge[1]) === false){
        djs.union(edge[0],edge[1]);
      }else if(djs.connected(edge[0],edge[1]) === true){
        return true;
      }
    }
    return false;
  }

  //Tarzan's Algorithm to find the articular points
  //Time complexity, O(V+E) for adjacency list
  APUtil(node,visited,ap,parent,low,disc){
    let children = 0;
    visited[node] = true;
    disc[node] = this.time;
    low[node] = this.time;
    this.time++;
    for(let nodeObj of this.adjacencyList[node]){
      if(visited[nodeObj.node] === false){
        parent[nodeObj.node] = node;
        children++;
        this.APUtil(nodeObj.node,visited,ap,parent,low,disc);
        low[node] = low[node] < low[nodeObj.node] ? low[node] : low[nodeObj.node];
        if(parent[node] === -1 && children > 1){
          ap[node] = true;
        }
        if(parent[node] !== -1 && low[nodeObj.node] >= disc[node]){
          ap[node] = true;
        }
      }else if(nodeObj.node !== parent[node]){
        low[node] = low[node] < disc[nodeObj.node] ? low[node] : disc[nodeObj.node];
      }
    }
  }
  ArticularPoints(){
    let visited = {};
    let disc = {};
    let low = {};
    let parent = {};
    let ap = {};
    Object.keys(this.adjacencyList).forEach(node =>{
      visited[node] = false;
      disc[node] = Infinity;
      low[node]  = Infinity;
      parent[node] = -1;
      ap[node] = false;
    });

    for(let node of Object.keys(this.adjacencyList)){
      if(visited[node] === false){
        this.APUtil(node,visited,ap,parent,low,disc);
      }
    }
    this.time = 0;
    return ap;
  }

  /* Finding Bridges in a graph
    Time complexity is O(V+E) as DFS is used */
    bridgeUtil(node,visited,parent,low,disc,result){
      visited[node] = true;
      disc[node] = this.time;
      low[node] = this.time;
      this.time++;

      for(let nodeObj of this.adjacencyList[node]){
        if(visited[nodeObj.node] === false){
          parent[nodeObj.node] = node;
          this.bridgeUtil(nodeObj.node,visited,parent,low,disc,result);

          low[node] = (low[node] < low[nodeObj.node]) ? low[node] : low[nodeObj.node];

          if(low[nodeObj.node] > disc[node]){
            result.push(node + nodeObj.node);
          }
        }else if(nodeObj.node !== parent[node]){
          low[node] = (low[node] < disc[nodeObj.node]) ? low[node] : disc[nodeObj.node];
        }
      }
    }
    bridge(){
      let visited = {};
      let disc = {};
      let low = {};
      let parent = {};
      let result = [];

      for(let vertex of Object.keys(this.adjacencyList)){
        visited[vertex] = false;
        disc[vertex] = Infinity;
        low[vertex] = Infinity;
        parent[vertex] = -1; 
      }

      for(let node of Object.keys(this.adjacencyList)){
        if(visited[node] === false){
          this.bridgeUtil(node, visited,parent,low,disc,result);
        }
      }
      this.time = 0;
      return result;
    }


    /* Euler Path means to visit every edge only once, if that starting and ending vertex is the same
    then it is an Euler Cycle or Circuit */
    /* For a graph to have a euler cycle, every vertices must have even number of edges coming out of it,
    if that is not true, in order for a euler path to exist within a graph, only two vertices at max can have
    even number of edges coming out of it and rest should be even numbered, keeping in mind that
    a undirected graph cannot have only one vertex having odd number of edges. If none of these situation
    applies, the graph in question doesn't have a Euler path or cycle */
    DetectEulerCycleMine(){
      let isEulerCylcle = Object.keys(this.adjacencyList).every(node => this.adjacencyList[node].length % 2 === 0);
      if(isEulerCylcle === true){
        return {status:true,message:"Euler Cycle"};
      }else{
        let EdgeNumber = {};
        Object.keys(this.adjacencyList).forEach(node => EdgeNumber[node] = this.adjacencyList[node].length);
        let odd = 0;
        let even = 0;
        for(let node in EdgeNumber){
          if(EdgeNumber[node] % 2 === 0){
            even++;
          }else{
            odd++;
          }
        }
        console.log("Number of vertices with Even edges are: ", even);
        console.log("Number of vertices with odd edges are", odd);
        if(odd > 2){
          return {status:true,message:"No Euler Cycle or Euler Path Exist"}
        }else{
          return {status:false,message:"Euler path exist only"};
        }
      }
    }

    // Now we will be able to print the euler path/cycle if any
    // by Fleury's algorithm
    PrintEulerCycle(){
      const adjacencyList = this.adjacencyList;
      /*********************************** */
      /****************************************** */
      function DFSCount(v,visited){
        let count = 1;
        visited[v] = true;
        for(let nodeObj of adjacencyList[v]){
          if(visited[nodeObj.node] === false){
            count = count + DFSCount(nodeObj.node,visited);
          }
        }
        return count;
      }
      /********************************************* */
      const isValidNextEdge = (u,v) =>{
        if(adjacencyList[u].length === 1){
          return true;
        }else{
          let visited = {};
          let count1 = DFSCount(u,visited);

          this.removeEdge(u,v);
          visited = {};
          let count2 = DFSCount(u,visited);

          this.addEdge(u,v);

          if(count1 > count2){
            return false;
          }else{
            return true;
          }
        }
      }
      /*********************************************** */
      const printEulerUtil = (node,result) =>{
        for(let nodeObj of adjacencyList[node]){
          if(isValidNextEdge(node,nodeObj.node)){
            result.push(node + nodeObj.node);
            this.removeEdge(node,nodeObj.node);
            printEulerUtil(nodeObj.node,result);
          }
        }
      }
      /***************** */
      let node = Object.keys(this.adjacencyList)[0];
      let result = [];
      for(let vertex in this.adjacencyList){
        if(this.adjacencyList[vertex].length % 2 !== 0){
          node = vertex;
          break;
        }
      }
      printEulerUtil(node,result);
      let uniqueEdgeNumber = Math.floor((this.EdgeNumber)/2);

      return result.slice(0,uniqueEdgeNumber + 1);
      
    }

    DetectHamiltonCycle(){
      // yet to be implemented
      return null;
    }




}
  

module.exports = GraphWeightUndirect;
