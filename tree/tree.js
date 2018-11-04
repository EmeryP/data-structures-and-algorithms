
const BinaryTree = require('./BinaryTree.js');
const Node = require('./Node.js');

const apples = new Node('Apples');
const bananas = new Node('Bananas');
const cucumbers = new Node('Cucumbers');
const pears = new Node('Pears');
const cabbage = new Node('Cabbages');
const grape = new Node('Grapes');
const plum = new Node('Plums');

const tree = new BinaryTree(apples);
apples.left = bananas;
apples.right = cucumbers;
bananas.left = pears;
bananas.right = cabbage;
cucumbers.left = grape;
grape.right = plum;

module.exports = tree;
