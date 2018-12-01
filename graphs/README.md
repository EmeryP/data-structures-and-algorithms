# Graphs
Used to store large amounts of multi-relational data

## Challenge
Write methods to work with a graph data structure

## Approach & Efficiency
A different approach was used with each different method.

## API
* `addVertex(<vertex>)` 
  * Will add a vertex to the graph but will not return any value.
* `addEdge(<startVertex, endVertex, weight>)`
  * Adds a new vertice to the graph
  * Includes the ability to have a “weight”
  * You'll need to bring in both the parent node(startVertex), and the new node(endVertex) to be added
* `getNeighbors(<vertex>)`
  * Returns a collection of nodes connected to the given node
  * Bring in a given node
  * Include the weight from the given node.
* `getNodes()` 
  * Is called on a graph and returns all of the nodes in the graph as a collection
* `size()`
  * Returns the total number of nodes in the graph