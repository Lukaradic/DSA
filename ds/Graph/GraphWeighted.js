class Graph {
    constructor() {
        this.adjecencyList = {};
    }

    addVertex(name) {
        this.adjecencyList[name] = [];
    }

    addEdge(vertexOne, vertexTwo, weight) {
        if (this.adjecencyList[vertexOne] !== undefined && this.adjecencyList[vertexTwo] !== undefined) {
            this.adjecencyList[vertexOne].push({ node: vertexTwo, weight });
            this.adjecencyList[vertexTwo].push({ node: vertexOne, weight });
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
                if (!visited[node.node]) {
                    dfsHelper(node.node);
                }
            }
        })(vertex)
        return results;
    }

    //  set all lengths from start to other vertexes to be infinite or some extreme large number
    //  when we get to the next vertex we check the previous length and update the path if this one is smaller
    dijkstrasAlgo(start, end) {
        const adjecencyList = this.adjecencyList;
        const path = []; //  returns at the end 
        const previous = {}; //  store the vertex from which we got to the current vertex if the length from start is smaller than previous length
        const distances = {};
        const priorityQueue = new PriorityQueue();

        (function () {
            for (let key in adjecencyList) {
                if (key === start) {
                    distances[key] = 0;
                    priorityQueue.enqueue(key, 0);
                } else {
                    distances[key] = Infinity;
                    priorityQueue.enqueue(key, Infinity);

                }
                previous[key] = null;
            }
        })();

        while (priorityQueue.values.length > 0) {
            let smallest = priorityQueue.dequeue().value;
            if (smallest === end) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let i in adjecencyList[smallest]) {
                    const nextNode = adjecencyList[smallest][i];
                    const node = nextNode.node;
                    const candidate = distances[smallest] + nextNode.weight;
                    if (candidate < distances[node]) {
                        distances[node] = candidate;
                        previous[node] = smallest;
                        priorityQueue.enqueue(node, candidate);
                    }
                }
            }

        }
        path.push(start);
        return path.reverse();
    }

}
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        this.values.push({ value, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

const graph = new Graph();
graph.addVertex('Belgrade');
graph.addVertex('Berlin');
graph.addVertex('Bern');
graph.addVertex('Budapest');
graph.addVertex('Bangkok');
graph.addVertex('Boston');

graph.addEdge('Belgrade', 'Berlin', 1002);
graph.addEdge('Belgrade', 'Budapest', 320);
graph.addEdge('Belgrade', 'Bern', 1364);
graph.addEdge('Berlin', 'Bern', 753);
graph.addEdge('Bern', 'Bangkok', 9123);
graph.addEdge('Budapest', 'Bangkok', 8248);
graph.addEdge('Belgrade', 'Bangkok', 8248);
graph.addEdge('Boston', 'Berlin', 6081);
graph.addEdge('Boston', 'Bern', 5982);
graph.addEdge('Boston', 'Budapest', 6734);



console.log(graph);
console.log(graph.dijkstrasAlgo('Belgrade', 'Bangkok'));
console.log(graph.dijkstrasAlgo('Belgrade', 'Boston'));


