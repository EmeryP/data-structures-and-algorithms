
const {Graph, Edge, Vertex} = require('./graph.js');

describe('Graphs', () => {

  describe('addVertex()', () => {

    it('should add a vertex with value of 10 to the graph', () => {
      const graph = new Graph();
      const ten = new Vertex(10);
      graph.addVertex(ten);
      expect(graph._adjacencyList.size).toEqual(1)
    })

    it('should add 2 vertices to the graph', () => {
      const graph = new Graph();
      const ten = new Vertex(10);
      const nine = new Vertex(9);
      graph.addVertex(ten);
      graph.addVertex(nine);
      expect(graph._adjacencyList.size).toEqual(2)
    })

    it('should add one named vertex to the graph', () => {
      const graph = new Graph();
      const ten = new Vertex(10);
      graph.addVertex(ten);
      
      expect(graph._adjacencyList.has(ten)).toBe(true)
    })
    
  })

  describe('getNodes()', () => {

    it('should add one node to the graph', () => {
      const graph = new Graph();
      const ten = new Vertex(10);
      graph.addVertex(ten);
      expect(graph.getNodes().length).toBe(1)
    })

    it('should return a node with a value 9 from the graph', () => {
      const graph = new Graph();
      const ten = new Vertex(10);
      const nine = new Vertex(9);
      graph.addVertex(ten);
      graph.addVertex(nine);
      expect(graph.getNodes()[1].value).toEqual(9)
    })

    it('should return a node with a value 10 from the graph', () => {
      const graph = new Graph();
      const ten = new Vertex(10);
      const nine = new Vertex(9);
      graph.addVertex(ten);
      graph.addVertex(nine);
      expect(graph.getNodes()[0].value).toEqual(10)
    })
    
  })

  describe('addDirectedEdge()', () => {
    it('should return the vertex with the value of 9', () => {
      const graph = new Graph();
      const ten = new Vertex(10);
      const nine = new Vertex(9);
      graph.addVertex(ten);
      graph.addVertex(nine);
      graph.addDirectedEdge(ten, nine);
      expect(graph._adjacencyList.get(ten)[0].vertex.value).toBe(9)
    })

    it('should add a vertex with value of 10 to the graph', () => {
      const graph = new Graph();
      const ten = new Vertex(10);
      const nine = new Vertex(9);
      const eight = new Vertex(8);
      const seven = new Vertex(7);
      graph.addVertex(ten);
      graph.addVertex(nine);
      graph.addVertex(eight);
      graph.addVertex(seven);
      graph.addDirectedEdge(eight, seven);
      expect(graph._adjacencyList.get(eight)[0].vertex.value).toBe(7)
    })

    xit('should add a vertex with value of 10 to the graph', () => {
      const graph = new Graph();
      const ten = new Vertex(10);
      const nine = new Vertex(9);
      graph.addVertex(ten);
      graph.addVertex(nine);
      graph.addDirectedEdge(ten, nine);
      expect(graph._adjacencyList.get(ten)[0].vertex.value).toBe(9)
    })
  })

})