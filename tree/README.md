
# Trees
Binary Tree and Binary Search Tree manipulation

## Challenge
* Create a BinaryTree class
  * Define a method for each of the depth first traversals called `preOrder`, `inOrder`, and `postOrder` which takes in a root node, and returns an array of the nodes.

* Create a BinarySearchTree class
  * Define a method named `add` that adds a new node in the correct location in the binary search tree.
  * Define a method named `search` that brings in a value of node, and returns the node with the desired value.

## Approach & Efficiency
* The BinaryTree `preOrder()`, `inOrder()`, and `postOrder()` methods are a Big O of O(n) as with every node I call the `logNode()` method and it logs the nodes value, left and right value. I did it this way because I didnt know of a better method. 
* The BinarySearchTree `add` method is an O(2) as it uses recursion.
* The BinarySearchTree `search` method is an O(n) as it uses a while loop to iterate through the tree until it finds the input value. 

## Testing setup
1) Fork and download this repository to your local machine
2) Navigate to the root directory where the `index.js` is located
3) From your cmd line run `npm i`
4) To run the tests; navigate to the tests directory and from your command line run `jest tree.test.js` and watch the magic happen.

## API Methods add(), search(), preOrder(), inOrder(), postOrder()
1) Will get to with time.

## Credits
* https://www.youtube.com/watch?v=5cU1ILGy6dM
* https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-15/resources/Trees.html
* https://khan4019.github.io/front-end-Interview-Questions/bst.html
* https://www.tutorialspoint.com/Pre-order-traversal-in-a-Javascript-Tree

