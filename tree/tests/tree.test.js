
const BST = require('../BinarySearchTree.js');
const BinaryTree = require('../BinaryTree.js');
const Node = require('../Node.js');

describe('Trees', () => {

  describe('BinaryTree', () => {
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

    describe('PreOrder', () => {
      it('will test if trees root is apple after preOrder is invoked', () => {
        tree.preOrder();
        expect(tree.storage[0].value).toBe('Apples');
      });
      it('will test if root\'s right is equal to cucumbers after preOrder is invoked', () => {
        tree.preOrder();
        expect(tree.root.right.value).toBe('Cucumbers');
      });
      it('will test if preOrder is defined after preOrder is invoked', () => {
        tree.preOrder();
        expect(tree.preOrder()).toBeDefined();
      });
    });

    describe('InOrder', () => {
      it('will test if trees root is apple after inOrder is invoked', () => {
        tree.inOrder();
        expect(tree.storage[0].value).toBe('Apples');
      });
      it('will test if root\'s right is equal to cucumbers  after inOrder is invoked', () => {
        tree.inOrder();
        // console.log(tree.root.right.value);
        expect(tree.root.right.value).toBe('Cucumbers');
      });
      it('will test if preOrder is defined after inOrder is invoked', () => {
        tree.inOrder();
        expect(tree.inOrder()).toBeDefined();
      });
    });

    describe('PostOrder', () => {
      it('will test if trees root is apple after postOrder is invoked', () => {
        tree.inOrder();
        expect(tree.storage[0].value).toBe('Apples');
      });
      it('will test if root\'s right is equal to cucumbers after postOrder is invoked', () => {
        tree.inOrder();
        // console.log(tree.root.right.value);
        expect(tree.root.right.value).toBe('Cucumbers');
      });
      it('will test if preOrder is defined after postOrder is invoked', () => {
        tree.inOrder();
        expect(tree.inOrder()).toBeDefined();
      });
    });

  });

  describe('Binary Search Tree', () => {
    describe('Add', () => {
      it('should add a node with a value of 10 to the root', () => {
        const bst = new BST();
        bst.add(10);
        expect(bst.root.value).toBe(10);
      });
      it('should add a node with a value of 5 to the left of the root node', () => {
        const bst = new BST();
        bst.add(10);
        bst.add(5);
        expect(bst.root.left.value).toBe(5);
      });
      it('should add a node with a value of 20 to the right of the root node', () => {
        const bst = new BST();
        bst.add(10);
        bst.add(5);
        bst.add(20);
        expect(bst.root.right.value).toBe(20);
      });
    });
    
    describe('Search', () => {
      it('should return a node with a value of 10', () => {
        const bst = new BST();
        bst.add(10);
        bst.add(20);
        bst.add(30);
        expect(bst.search(10).value).toBe(10);
      });
      it('should return a node with a value of 5', () => {
        const bst = new BST();
        bst.add(10);
        bst.add(5);
        bst.add(50);
        expect(bst.search(5).value).toBe(5);        
      });
      it('should return a node with a value of 20', () => {
        const bst = new BST();
        bst.add(10);
        bst.add(5);
        bst.add(20);
        expect(bst.search(20).value).toBe(20);        
      });
    });

  });
});