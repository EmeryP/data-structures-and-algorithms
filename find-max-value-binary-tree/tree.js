const BinaryTree = require('./BinaryTree.js');
const Node = require('./Node.js');

const ten = new Node(10);
const five = new Node(5);
const thirty = new Node(30);
const sixty = new Node(60);
const fiveFive = new Node(55);
const sixSix = new Node(66);
const seven = new Node(7);


const nodeTree = new BinaryTree(ten);
ten.left = five;
ten.right = thirty;
thirty.right = sixty;
sixty.left = fiveFive;
fiveFive.right = sixSix;
sixSix.left = seven;

nodeTree.preOrder();

module.exports = nodeTree;