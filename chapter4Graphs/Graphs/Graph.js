class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
            return true;
        }else{
            return false;
        }
    }
    addEdge(v1,v2){
        if(this.adjacencyList[v1] && this.adjacencyList[v2]){
            if(this.adjacencyList[v1].includes(v2) && this.adjacencyList[v2].includes(v1)){
                return true;
            }else{
                this.adjacencyList[v1].push(v2);
                this.adjacencyList[v2].push(v1);
                return true;
            }
        }else{
            return undefined;
        }
    }

    removeEdge(v1,v2){
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2]){
            return undefined;
        }else if(this.adjacencyList[v1].includes(v2) && this.adjacencyList[v2].includes(v1)){
            this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
            this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
            return true;
        }else{
            return false;
        }
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return undefined;
        }
        while(this.adjacencyList[vertex].length !== 0){
            let adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,adjacentVertex);
        }
        delete this.adjacencyList[vertex];
        return true;
    }
}

module.exports = Graph;