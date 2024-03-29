const GraphList = require('./GraphList');

describe('GraphList', () => {
    let graph;
    beforeEach(() => {
        graph = new GraphList();
    })
    it('Should add an vortex', () => {
        graph.addVertex('Belgrade');
        graph.addVertex('Berlin');
        graph.addVertex('Budapest');
        graph.addVertex('Bern');

        expect(graph.adjecencyList.Belgrade).toEqual([]);
        expect(graph.adjecencyList.Berlin).toEqual([]);
        expect(graph.adjecencyList.Budapest).toEqual([]);
        expect(graph.adjecencyList.Bern).toEqual([]);

    });


    it('Should add an edge', () => {
        graph.addVertex('Belgrade');
        graph.addVertex('Berlin');
        graph.addVertex('Budapest');
        graph.addVertex('Bern');

        graph.addEdge('Belgrade', 'Berlin');
        graph.addEdge('Belgrade', 'Bern');
        graph.addEdge('Berlin', 'Bern');
        graph.addEdge('Belgrade', 'Budapest');
        graph.addEdge('Bern', 'Budapest');


        expect(graph.adjecencyList.Belgrade.length).toBe(3);
        expect(graph.adjecencyList.Belgrade).toContain('Berlin');
        expect(graph.adjecencyList.Belgrade).toContain('Bern');
        expect(graph.adjecencyList.Belgrade).toContain('Budapest');

    });


    it('Should delete an edge', () => {
        graph.addVertex('Belgrade');
        graph.addVertex('Berlin');
        graph.addVertex('Budapest');
        graph.addVertex('Bern');

        graph.addEdge('Belgrade', 'Berlin');
        graph.addEdge('Belgrade', 'Bern');
        graph.addEdge('Berlin', 'Bern');
        graph.addEdge('Belgrade', 'Budapest');
        graph.addEdge('Bern', 'Budapest');

        graph.removeEdge('Berlin', 'Belgrade');
        graph.removeEdge('Bern', 'Belgrade');


        expect(graph.adjecencyList.Belgrade.length).toBe(1);
        expect(graph.adjecencyList.Belgrade).not.toContain('Berlin');
        expect(graph.adjecencyList.Belgrade).not.toContain('Bern');
        expect(graph.adjecencyList.Belgrade).toContain('Budapest');


        
    });
    it('Should delete an vertex', () => {
        graph.addVertex('Belgrade');
        graph.addVertex('Berlin');
        graph.addVertex('Budapest');
        graph.addVertex('Bern');

        graph.addEdge('Belgrade', 'Berlin');
        graph.addEdge('Belgrade', 'Bern');
        graph.addEdge('Berlin', 'Bern');
        graph.addEdge('Belgrade', 'Budapest');
        graph.addEdge('Bern', 'Budapest');

        graph.removeVertex('Berlin');

        expect(graph.adjecencyList.Belgrade.length).toBe(2);
        expect(graph.adjecencyList.Belgrade).not.toContain('Berlin');
        expect(graph.adjecencyList.Berlin).toBeFalsy();

    });

    it('Should dfs and return all vertexes', () => {
        graph.addVertex('Belgrade');
        graph.addVertex('Berlin');
        graph.addVertex('Budapest');
        graph.addVertex('Bern');
        graph.addVertex('Bangkok');

        graph.addEdge('Belgrade', 'Berlin');
        graph.addEdge('Belgrade', 'Bern');
        graph.addEdge('Berlin', 'Bern');
        graph.addEdge('Belgrade', 'Budapest');
        graph.addEdge('Bern', 'Budapest');
        graph.addEdge('Berlin', 'Bangkok');


        expect(graph.dfs('Belgrade')).toContain('Belgrade');
        expect(graph.dfs('Belgrade')).toContain('Berlin');
        expect(graph.dfs('Belgrade')).toContain('Bangkok');
        expect(graph.dfs('Belgrade')).toContain('Bern');
        expect(graph.dfs('Belgrade')).toContain('Budapest');
    })

    it('Should bfs and return all vertexes', () => {
        graph.addVertex('Belgrade');
        graph.addVertex('Berlin');
        graph.addVertex('Budapest');
        graph.addVertex('Bern');
        graph.addVertex('Bangkok');

        graph.addEdge('Belgrade', 'Berlin');
        graph.addEdge('Belgrade', 'Bern');
        graph.addEdge('Berlin', 'Bern');
        graph.addEdge('Belgrade', 'Budapest');
        graph.addEdge('Bern', 'Budapest');
        graph.addEdge('Berlin', 'Bangkok');

        expect(graph.bfs('Belgrade')).toContain('Belgrade');
        expect(graph.bfs('Belgrade')).toContain('Berlin');
        expect(graph.bfs('Belgrade')).toContain('Bangkok');
        expect(graph.bfs('Belgrade')).toContain('Bern');
        expect(graph.bfs('Belgrade')).toContain('Budapest');

    })

})