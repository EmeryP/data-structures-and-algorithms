
const BinaryTree = require('./BinaryTree.js');
const Node = require('./Node.js');

const apples = new Node('Apples');
const bananas = new Node('Bananas');
const cucumbers = new Node('Cucumbers');

const tree = new BinaryTree(apples);
apples.left = bananas;
apples.right = cucumbers;

// tree.preOrder();
// tree.postOrder();
tree.inOrder();