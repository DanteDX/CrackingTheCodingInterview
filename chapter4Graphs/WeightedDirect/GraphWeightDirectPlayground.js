const GraphWeightDirect = require("./GraphWeightDirect");

let g = new GraphWeightDirect();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addVertex('G');

g.addEdge('A','G',10);
g.addEdge('A','F',21);
g.addEdge('A','B',12);
g.addEdge('A','C',13);

g.addEdge('B','G',14);
g.addEdge('B','D',17);

g.addEdge('C','D',18);
g.addEdge('C','E',20);

g.addEdge('D','G',23);
g.addEdge('D','E',19);

g.addEdge('E','F',22);

g.addEdge('F','C',2);

g.addEdge('G','A',3);

console.log(g.adjacencyList);
console.log("############################################");
console.log("DFS Iterative Result is: ",g.depthFirstIterative('A'));
console.log("############################################");
console.log("DFS Recursive result is: ",g.depthFirstRecursive('A'));
console.log('#############################################');
console.log("BFS result is:", g.breadthFirst('A'));
