'use strict';
const util = require('util');

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  
  constructor() {
    this._adjacencyList = new Map()
  }

  addVertex(vertex) {
    this._adjacencyList.set(vertex, [])
  }

  addEdge(startVertex, endVertex, weight = 0) {
    if(!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)){
      throw new Error('__ERROR__ Invalid Node')
    }

    const adjacencies = this._adjacencyList.get(startVertex)
    adjacencies.push(new Edge(endVertex, weight))
  }

  getNeighbors(vertex) {
    if(!this._adjacencyList.has(vertex)){
      throw new Error('__ERROR__ Invalid Vertex', vertex);
    }
    return [...this._adjacencyList.get(vertex)];
  }
  
  bfs(startNode) {
    const queue = [];
    const visitedNodes = new Set();

    queue.push(startNode);
    visitedNodes.add(startNode);

    while(queue.length){
      const currentNode = queue.shift();
      const neighbors = this.getNeighbors(currentNode);

      for(let neighbor of neighbors){
        const neighborNode = neighbor.vertex

        if(visitedNodes.has(neighborNode)){
          continue;
        } else {
          visitedNodes.add(neighborNode)
        }
        queue.push(neighborNode)
      }
    }
    return visitedNodes;
  }

  dfs(startNode) {

  }

  size(){
    return this._adjacencyList.size;
  }

  getNodes(){
    return [...this._adjacencyList.keys()];
  }
  
}

module.exports =  {Graph, Edge, Vertex};

// const graph = new Graph();
// const vertex = new Vertex()

// const ten = new Vertex(10);
// const two = new Vertex(2);
// const six = new Vertex(6);
// const seven = new Vertex(7);
// const three = new Vertex(3);
// const eight = new Vertex(8);

// graph.addVertex(ten);
// graph.addVertex(two);
// graph.addVertex(six);
// graph.addVertex(seven);
// graph.addVertex(three);
// graph.addVertex(eight);

// graph.addDirectedEdge(ten, two);
// graph.addDirectedEdge(ten, six);
// graph.addDirectedEdge(ten, three);
// graph.addDirectedEdge(ten, seven);
// graph.addDirectedEdge(two, seven);
// graph.addDirectedEdge(six, seven);
// graph.addDirectedEdge(six, eight);
// graph.addDirectedEdge(three, eight);
// graph.addDirectedEdge(eight, seven);


// console.log(util.inspect(graph.bfs(ten), false, null, true));
// console.log(graph)
// console.log(util.inspect(graph.dfs(ten), false, null, true));