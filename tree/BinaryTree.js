class BinaryTree {
  constructor(root = null){
    this.root = root;
  }

  preOrder(node = this.root){
    // need to insert a node here
    this.logNodePre(node);
    return;
  }
  
  logNodePre(node){
    if(!node) return;
    //pre order
    console.log(node.value); //log thyself
    this.logNodePre(node.left); //visit left
    this.logNodePre(node.right); //visit right
  }


  postOrder(node = this.root){
    // need to insert a node here
    this.logNodePost(node);
    return;
  }
  
  logNodePost(node){
    if(!node) return;
    //post order
    this.logNodePost(node.left); //visit left
    this.logNodePost(node.right); //visit right
    console.log(node.value); //log thyself
  }

  inOrder(node = this.root){
    // need to insert a node here
    this.logNodeIn(node);
    return;
  }
  
  logNodeIn(node){
    if(!node) return;
    //in order
    this.logNodeIn(node.left); //visit left
    console.log(node.value); //log thyself
    this.logNodeIn(node.right); //visit right
  }
}

module.exports = BinaryTree;