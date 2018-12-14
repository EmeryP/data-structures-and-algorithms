
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

// Will construct a Binary Tree
const nodes = new BinaryTree(three);
three.left = nine;
three.right = twenty;
twenty.right = seven;
twenty.left = fifteen;
fifteen.left = four;
four.left = six;


// Will construct a Binary Search Tree
// const nodes = new BinaryTree(seven);
// seven.left = six;
// seven.right = nine;
// six.left = four;
// four.left = three;
// nine.right = fifteen;
// fifteen.right = twenty;


//createTree will create a tree out of the following array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function createTree(arr) {
  return createTreeHelper(arr, 0, arr.length - 1);
}

function createTreeHelper(arr, start, end) {
  if (end < start) {
    return null;
  }
  let mid = Math.floor((start + end) / 2);
  let node = new Node(arr[mid]);
  node.left = createTreeHelper(arr, start, mid - 1);
  node.right = createTreeHelper(arr, mid + 1, end);
  return node;
}

// console.log(createTree(arr));
// console.log('tree inorder', tree.inOrder());
// console.log(nodes);
// console.log('isBST', nodes.isBST(nodes));
// console.log('maxHeight', nodes.maxHeight(nodes));
// console.log('maxDepth', nodes.maxDepth());
console.log(nodes.maxSumHeight(nodes));


module.exports = tree;
