
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

  describe('addEdge()', () => {
    it('should return the end vertex with the correct value from a graph with a size of 2', () => {
      const graph = new Graph();
      const ten = new Vertex(10);
      const nine = new Vertex(9);
      graph.addVertex(ten);
      graph.addVertex(nine);
      graph.addEdge(ten, nine);
      expect(graph._adjacencyList.get(ten)[0].vertex.value).toBe(9)
    })

    it('should return the end vertex with the correct value from a graph with a size of 4', () => {
      const graph = new Graph();
      const ten = new Vertex(10);
      const nine = new Vertex(9);
      const eight = new Vertex(8);
      const seven = new Vertex(7);
      graph.addVertex(ten);
      graph.addVertex(nine);
      graph.addVertex(eight);
      graph.addVertex(seven);
      graph.addEdge(eight, seven);
      expect(graph._adjacencyList.get(eight)[0].vertex.value).toBe(7)
    })

    it('should add a vertex with a weight equal to 0 to the graph', () => {
      const graph = new Graph();
      const ten = new Vertex(10);
      const nine = new Vertex(9);
      graph.addVertex(ten);
      graph.addVertex(nine);
      graph.addEdge(ten, nine);
      expect(graph._adjacencyList.get(ten)[0].weight).toBe(0)
    })

    xit('should throw the proper error', () => {
      const graph = new Graph();
      const ten = new Vertex(10);
      const nine = new Vertex(9);
      graph.addVertex(ten);
      graph.addVertex(nine);
      expect(graph.addEdge(ten)).toThrowError(/^__ERROR__ Invalid Node$/)
    })
  })

  describe('getNeighbor()', () => {
    it('should return the correctly identified neighbor', () => {
      const graph = new Graph();
      const ten = new Vertex(10);
      const nine = new Vertex(9);
      graph.addVertex(ten);
      graph.addVertex(nine);
      graph.addEdge(ten, nine);
      expect(graph.getNeighbors(ten)[0].vertex.value).toBe(9)
    })

    it('should return the correctly identified neighbor', () => {
      const graph = new Graph();
      const ten = new Vertex(10);
      const nine = new Vertex(9);
      const eight = new Vertex(8);
      const seven = new Vertex(7);
      graph.addVertex(ten);
      graph.addVertex(nine);
      graph.addVertex(eight);
      graph.addVertex(seven);
      graph.addEdge(ten, nine);
      graph.addEdge(ten, eight);
      expect(graph.getNeighbors(ten)[1].vertex.value).toBe(8)
    })

    it('should return the proper length of the neighbors array returned from the getNeighbors method', () => {
      const graph = new Graph();
      const ten = new Vertex(10);
      const nine = new Vertex(9);
      const eight = new Vertex(8);
      const seven = new Vertex(7);
      graph.addVertex(ten);
      graph.addVertex(nine);
      graph.addVertex(eight);
      graph.addVertex(seven);
      graph.addEdge(ten, nine);
      graph.addEdge(ten, eight);
      graph.addEdge(ten, seven);
      expect(graph.getNeighbors(ten).length).toBe(3)
    })
  })

  describe('size()', () => {
    it('should return the correct size of the graph', () => {
      const graph = new Graph();
      const ten = new Vertex(10);
      const nine = new Vertex(9);
      graph.addVertex(ten);
      graph.addVertex(nine);
      expect(graph.size()).toBe(2)
    })

    it('should return the correct size of the graph', () => {
      const graph = new Graph();
      const ten = new Vertex(10);
      const nine = new Vertex(9);
      const eight = new Vertex(8);
      const seven = new Vertex(7);
      graph.addVertex(ten);
      graph.addVertex(nine);
      graph.addVertex(eight);
      graph.addVertex(seven);
      expect(graph.size()).toBe(4)
    })

    it('should return the correct size of the graph', () => {
      const graph = new Graph();
      expect(graph.size()).toBe(0)
    })
  })

})