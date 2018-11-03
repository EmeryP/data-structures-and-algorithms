
const Node = require('./Node');

class BST {
  constructor(root = null){
    this.root = root;
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

  search(value){
    let current = this.root;
    while(current.value !== value){ 
      if(value < current.value){ 
        current = current.left;
      } else {
        current = current.right;
      }
      if(current === null){
        return null;
      }
    }
    return current;
  } 

}

let BSTD = new BST();

BSTD.add(50);
BSTD.add(70);
BSTD.add(40);
BSTD.add(60);
BSTD.add(30);
BSTD.add(10);
console.log(BSTD);

console.log(BSTD.search(70));

module.exports = BSTD;

// export default BSTD;

