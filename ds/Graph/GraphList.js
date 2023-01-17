class Graph {
    constructor() {
        this.adjecencyList = {};
    }

    addVertex(name) {
        this.adjecencyList[name] = [];
    }
    addEdge(vertexOne, vertexTwo) {
        if (this.adjecencyList[vertexOne] !== undefined && this.adjecencyList[vertexTwo] !== undefined) {
            this.adjecencyList[vertexOne].push(vertexTwo);
            this.adjecencyList[vertexTwo].push(vertexOne);
        }
    }

    removeEdge(vertexOne, vertexTwo) {
        if (this.adjecencyList[vertexOne] !== undefined && this.adjecencyList[vertexTwo] !== undefined) {
            this.adjecencyList[vertexOne] = [...this.adjecencyList[vertexOne].filter(el => el !== vertexTwo)];
            this.adjecencyList[vertexTwo] = [...this.adjecencyList[vertexTwo].filter(el => el !== vertexOne)];
        }
    }

    removeVertex(vertex) {
        for (let node of this.adjecencyList[vertex]) {
            this.adjecencyList[node] = [...this.adjecencyList[node].filter(el => el !== vertex)];
        }
        delete this.adjecencyList[vertex];
    }

    //  
    dfs(vertex) {

        const visited = {};
        const results = [];
        const adjecencyList = this.adjecencyList;

        (function dfsHelper(vertex) {
            if (adjecencyList[vertex] === undefined) return null
            if (visited[vertex]) return;
            visited[vertex] = true;
            results.push(vertex);
            for (let node of adjecencyList[vertex]) {
                if (!visited[node]) {
                    dfsHelper(node);
                }
            }
        })(vertex)
        return results;

    }
    //  Goes from starting point to each connection. Stores the connections in a queue. Repeat untill all vertexes are visited
    bfs(vertex) {
        const adjecencyList = this.adjecencyList;
        const results = [];
        const visited = {};
        const queue = [];
        queue.push(vertex);
        while(queue.length) {
            const node = queue.shift();
            visited[node] = true;
            results.push(node);
            for(let element of adjecencyList[node]) {
                if(!visited[element]) {
                    visited[element] = true;
                    queue.push(element);
                } 
            }
        }
        return results;
    }
    
}



module.exports = Graph;