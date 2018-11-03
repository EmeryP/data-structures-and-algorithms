

class BinaryTree {
  constructor(root = null){
    this.root = root;
    this.storage = [];
  }


  preOrder(node = this.root){
    this.logNodePre(node);
    this.storage.unshift(this.root);
    console.log(this.storage);
    return this.storage;
  }
  
  logNodePre(node){
    if(!node) return;
    console.log(node.value); //log thyself
    this.logNodePre(node.left); //visit left
    this.logNodePre(node.right); //visit right
  }


  postOrder(node = this.root){
    this.logNodePost(node);
    this.storage.unshift(this.root);
    // console.log(this.storage);
    return this.storage;
  }
  
  logNodePost(node){
    if(!node) return;
    this.logNodePost(node.left); //visit left
    this.logNodePost(node.right); //visit right
    console.log(node.value); //log thyself
  }


  inOrder(node = this.root){
    this.logNodeIn(node);
    this.storage.unshift(this.root);
    // console.log(this.storage);
    return this.storage;
  }
  
  logNodeIn(node){
    if(!node) return;
    this.logNodeIn(node.left); //visit left
    console.log(node.value); //log thyself
    this.logNodeIn(node.right); //visit right
  }
}
// export default BinaryTree;
module.exports = BinaryTree;