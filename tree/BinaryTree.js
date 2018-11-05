

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
    this.logNodePre(node.value);
    if(node.value % 15 === 0){ node.value = 'fizz buzz';}
    if(node.value % 5 === 0){ node.value = 'buzz';}
    if(node.value % 3 === 0){ node.value = 'fizz';}
    this.logNodePre(node.left); 
    this.logNodePre(node.right); 
  }


  postOrder(node = this.root){
    this.logNodePost(node);
    this.storage.unshift(this.root);
    return this.storage;
  }
  
  logNodePost(node){
    if(!node) return;
    this.logNodePost(node.left); 
    this.logNodePost(node.right); 
    this.logNodeIn(node.value); 
  }


  inOrder(node = this.root){
    this.logNodeIn(node);
    this.storage.unshift(this.root);
    return this.storage;
  }
  
  logNodeIn(node){
    if(!node) return;
    this.logNodeIn(node.left); 
    this.logNodeIn(node.value); 
    this.logNodeIn(node.right);
  }
}
module.exports = BinaryTree;