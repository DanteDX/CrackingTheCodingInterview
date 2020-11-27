const GraphWeightUndirect = require("./GraphWeightUndirect");

let g = new GraphWeightUndirect();
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

console.log(g.adjacencyList);
console.log("############################################");
console.log("DFS Iterative Result is: ",g.depthFirstIterative('A'));
console.log("############################################");
console.log("DFS Recursive result is: ",g.depthFirstRecursive('A'));
console.log('#############################################');
console.log("BFS result is:", g.breadthFirst('A'));
console.log("###############################################");
console.log(g.Dijkstra('B','C'));
console.log('################################################');
console.log('Bellman ford result, B & C');
console.log(g.bellmanFord('B','C'));
console.log('Floyd Warshall result');
console.log(g.floydWarshall());
console.log('##############################################');
console.log('Kruskal algorithm result:');
console.log('Kruskal is implemented on this very graph');
console.log(g.Kruskal());
console.log("########################################################");
console.log("########################################################");
console.log("########################################################");
console.log('Prim algorithm result:');
console.log('Prim is implemented on this very graph');
console.log('Mimimum spanning tree resulting from Prim algorithm is');
console.log(g.Prim());
console.log("##############################################################");
console.log("##############################################################");
console.log("##############################################################");
console.log('This graph is for detecting cycles');
let gc = new GraphWeightUndirect();
gc.addVertex("A");
gc.addVertex("B");
gc.addVertex("C");
gc.addVertex("D");
gc.addVertex("E");
gc.addVertex("F");

gc.addEdge("A","B",1);
// gc.addEdge("B",'C',1);
gc.addEdge("A","C",1);
gc.addEdge("A","D",1);
gc.addEdge("D","E",1);
// gc.addEdge("E","F",1);
gc.addEdge("F","D",1);
console.log(gc.adjacencyList);
console.log(gc.DetectCycle());
console.log("################################################################");
console.log("####################################################################");
console.log('this graph is to test Articulation point finder by Tarzan algorithm');
let gat = new GraphWeightUndirect();
gat.addVertex('A');
gat.addVertex('B');
gat.addVertex('C');
gat.addVertex('D');
gat.addVertex('E');
gat.addVertex('F');
gat.addVertex('G');
gat.addVertex('H');

gat.addEdge('A','C',1);
gat.addEdge('A','B',1);
gat.addEdge('B','C',1);
gat.addEdge('C','D',1);
gat.addEdge('D','E',1);
gat.addEdge('E','G',1);
gat.addEdge('E','F',1);
gat.addEdge('G','F',1);
gat.addEdge('F','H',1);
/************************** */
// gat.addEdge('A','B',1);
// gat.addEdge('B','C',1);
// gat.addEdge('C','A',1);
// gat.addEdge('A','D',1);
// gat.addEdge('D','E',1);
console.log(gat.adjacencyList);
console.log('Articular points are');
console.log(gat.ArticularPoints());
console.log('Bridges are:');
console.log(gat.bridge());