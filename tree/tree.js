
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

const three = new Node(3);
const nine = new Node(9);
const twenty = new Node(20);
const fifteen = new Node(15);
const seven = new Node(7);
const four = new Node(4);
const six = new Node(6);

const nodes = new BinaryTree(three);
three.left = nine;
three.right = twenty;
twenty.right = seven;
twenty.left = fifteen;
fifteen.left = four;
four.left = six;


// console.log('tree inorder', tree.inOrder());

console.log('maxHeight', nodes.maxHeight(nodes));
// console.log('maxDepth', nodes.maxDepth());


module.exports = tree;
