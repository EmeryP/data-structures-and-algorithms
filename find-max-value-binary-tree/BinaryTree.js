

class BinaryTree {
  constructor(root = null){
    this.root = root;
    this.storage = [];
  }
  
  
  maxValBinTree(node = this.root){
    this.maxValue = 0;
    this.maxValBinTreeHelper(node);
    // console.log(this.maxValue);
    return this.maxValue;
  }
  
  maxValBinTreeHelper(node){
    if(!node) return;
    this.maxValBinTreeHelper(node.value);
    if(node.value > this.maxValue){ this.maxValue = node.value;}
    this.maxValBinTreeHelper(node.left);
    this.maxValBinTreeHelper(node.right);
  }
}
module.exports = BinaryTree;