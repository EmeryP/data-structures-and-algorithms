class Node {

  constructor(value, left = null, right = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor(){
    this.root = null;
  }

  add(value){
    const node = this.root;
    if(node === null) {
      this.root = new Node(value);
      return;
    } else {
      const searchTree = function(node){
        if(value < node.value){
          if(node.left === null){
            node.left = new Node(value);
            return;
          } else if(node.left !== null){
            return searchTree(node.left);
          }
        } else if(value > node.value){
          if(node.right === null) {
            node.right = new Node(value);
            return;
          } else if(node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

}

let BSTD = new BST();

BSTD.add(10);
BSTD.add(1000);
BSTD.add(100);
BSTD.add(1);
console.log(BSTD);


module.exports = BSTD;

