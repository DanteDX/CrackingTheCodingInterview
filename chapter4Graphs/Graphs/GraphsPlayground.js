const Graph = require("./Graph");

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addVertex('G');

g.addEdge('A','G');
g.addEdge('A','F');
g.addEdge('A','B');
g.addEdge('A','C');

g.addEdge('B','G');
g.addEdge('B','D');

g.addEdge('C','D');
g.addEdge('C','E');

g.addEdge('D','G');
g.addEdge('D','E');

g.addEdge('E','F');

console.log(g.adjacencyList);
console.log("############################################");
console.log("DFS Iterative Result is: ",g.depthFirstIterative('A'));
console.log("############################################");
console.log("DFS Recursive result is: ",g.depthFirstRecursive('A'));
console.log('#############################################');
console.log("BFS result is:", g.breadthFirst('A'));
