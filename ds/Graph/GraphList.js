class Graph {
    constructor() {
        this.adjecencyList = {};
    }

    addVertex(name) {
        this.adjecencyList[name] = [];
    }
    addEdge(vertexOne, vertexTwo) {
        if(this.adjecencyList[vertexOne] !== undefined && this.adjecencyList[vertexTwo] !== undefined) {
            this.adjecencyList[vertexOne].push(vertexTwo);
            this.adjecencyList[vertexTwo].push(vertexOne);
        }
    }

    removeEdge(vertexOne, vertexTwo) {
        if(this.adjecencyList[vertexOne] !== undefined && this.adjecencyList[vertexTwo] !== undefined) {
            this.adjecencyList[vertexOne] = [...this.adjecencyList[vertexOne].filter(el => el !== vertexTwo)];
            this.adjecencyList[vertexTwo] = [...this.adjecencyList[vertexTwo].filter(el => el !== vertexOne)];
        }
    }

    removeVertex(vertex) {
        for(let node of this.adjecencyList[vertex]) {
            this.adjecencyList[node] = [...this.adjecencyList[node].filter(el => el !== vertex)];
        }
        delete this.adjecencyList[vertex];
    }
}



module.exports = Graph;