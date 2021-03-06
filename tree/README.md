
# Trees
Binary Tree and Binary Search Tree manipulation

## Challenge
* Create a BinaryTree class
  * Define a method for each of the depth first traversals called `preOrder`, `inOrder`, and `postOrder` which takes in a root node, and returns an array of the nodes.

* Create a BinarySearchTree class
  * Define a method named `add` that adds a new node in the correct location in the binary search tree.
  * Define a method named `search` that brings in a value of node, and returns the node with the desired value.

## Approach & Efficiency
* The Big O of time for an insertion or search in a binary tree will always be O(n). This is because there is no structure or organization to a Binary Tree. This means the worst case scenario will be to search the whole tree for the node we need to add or find.
* The Big O of space for a Node insertion using a breadth first insertion method will be an O(w) where 'w' is the largest width of the tree. This is because the queue could contain all the nodes at the tree's widest point. 

## Testing setup
1) Fork and clone this repository to your local machine
2) Navigate to the root directory where the `index.js` is located
3) From your cmd line run `npm i`
4) To run the tests; navigate into the `tests` directory and from your command line run `jest tree.test.js` and watch the magic happen.

## API Methods add(), search(), preOrder(), inOrder(), postOrder()
1) `add(<value>)` will add a a node with the input value to the `Binary Search Tree`.
2) `search(<search value>)` will search through the binary search tree and return the node with the input value
3) `preOrder()` will traverse through the tree in a root, left, right order.
4) `inOrder()` will traverse through the tree in a left, root, right order.
5) `postOrder()` will traverse through the tree in a left, right, root order.

## Resources
* https://www.youtube.com/watch?v=5cU1ILGy6dM
* https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-15/resources/Trees.html
* https://khan4019.github.io/front-end-Interview-Questions/bst.html
* https://www.tutorialspoint.com/Pre-order-traversal-in-a-Javascript-Tree


# FizzBuzz Tree
Write a FizzBuzz algorithm on a tree

## Challenge
Without utilizing any of the built-in methods available to your language, determine weather or not the value of each node is divisible by 3, 5 or both, and change the value of each of the nodes respectively. Return the tree with it’s news values.

## Approach & Efficiency
Our approach was to use a recursive pre-order search algorithm. The Big O for both time is O(n) and for space it's and O(1). 

## Solution
![Whiteboard](./assets/fizzBuzzTreeWhiteboard.jpg)



