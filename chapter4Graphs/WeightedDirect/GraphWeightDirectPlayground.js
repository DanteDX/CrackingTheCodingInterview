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
g.addEdge('B','D',17);//1
// try switching back the values to see different path results

g.addEdge('C','D',18);
g.addEdge('C','E',20);

g.addEdge('D','G',23);
g.addEdge('D','E',19); //1
// try switching back the values to see different path results

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
console.log("###############################################");
console.log('Dijkstra result, B & C');
console.log(g.Dijkstra('B','C'));
console.log('################################################');
console.log('Bellman ford result, B & C');
console.log(g.bellmanFord('B','C'));
console.log("#################################################");
// specially for floyd warshall testing
let gf = new GraphWeightDirect();
gf.addVertex('1');
gf.addVertex('2');
gf.addVertex('3');
gf.addVertex('4');

gf.addEdge('1','2',3);
gf.addEdge('1','4',7);

gf.addEdge('2','1',8);
gf.addEdge('2','3',2);

gf.addEdge('3','1',5);
gf.addEdge('3','4',1);

gf.addEdge('4','1',2);
gf.addEdge('4','2',1);


console.log('Floyd Warshall result');
console.log(gf.floydWarshall());
console.log("########################################################");
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
console.log("#########################################################");
console.log("#########################################################");
console.log("This Directed Acyclic graph is for topological sort");
let gt = new GraphWeightDirect();
gt.addVertex('A');
gt.addVertex('B');
gt.addVertex('C');
gt.addVertex('D');
gt.addVertex('E');
gt.addVertex('F');
gt.addVertex('G');
gt.addVertex('H');

gt.addEdge('A','C',1);
gt.addEdge('B','C',1);
gt.addEdge('B','D',1);
gt.addEdge('C','E',1);
gt.addEdge('E','H',1);
gt.addEdge('E','F',1);
gt.addEdge('D','F',1);
gt.addEdge('F','G',1);
console.log(gt.adjacencyList);
console.log('The topological sorting result is:');
console.log(gt.TopologicalSort());
console.log("##############################################################");
console.log("##############################################################");
console.log("##############################################################");
