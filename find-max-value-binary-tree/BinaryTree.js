

class BinaryTree {
  constructor(root = null){
    this.root = root;
    this.storage = [];
  }
  
  
  preOrder(node = this.root){
    this.maxValue = 0;
    this.logNodePre(node);
    // console.log(this.maxValue);
    return this.maxValue;
  }
  
  logNodePre(node){
    if(!node) return;
    this.logNodePre(node.value);
    if(node.value > this.maxValue){ this.maxValue = node.value;}
    this.logNodePre(node.left);
    this.logNodePre(node.right);
  }
}
module.exports = BinaryTree;