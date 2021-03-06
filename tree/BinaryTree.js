

class BinaryTree {
  constructor(root = null) {
    this.root = root;
    this.storage = [];
  }


  preOrder(node = this.root) {
    this.logNodePre(node);

    this.storage.unshift(this.root);
    console.log(this.storage);
    return this.storage;
  }

  logNodePre(node) {
    if (!node) return;
    this.logNodePre(node.value);
    if (node.value % 15 === 0) { node.value = 'fizz buzz'; }
    if (node.value % 5 === 0) { node.value = 'buzz'; }
    if (node.value % 3 === 0) { node.value = 'fizz'; }
    this.logNodePre(node.left);
    this.logNodePre(node.right);
  }


  postOrder(node = this.root) {
    this.logNodePost(node);
    this.storage.unshift(this.root);
    return this.storage;
  }

  logNodePost(node) {
    if (!node) return;
    this.logNodePost(node.left);
    this.logNodePost(node.right);
    this.logNodeIn(node.value);
  }


  inOrder(node = this.root) {
    this.logNodeIn(node);
    this.storage.unshift(this.root);
    return this.storage;
  }

  logNodeIn(node) {
    if (!node) return;
    this.logNodeIn(node.left);
    this.logNodeIn(node.value);
    this.logNodeIn(node.right);
  }

  //returns the height of the tree plus 1
  maxDepth(node = this.root) {
    if (node == null) {
      return 0;
    } else {
      let leftHeight = this.maxDepth(node.left);
      let rightHeight = this.maxDepth(node.right);
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }

  //returns the correct height of the tree
  maxHeight(tree) {

    let node = tree.root;
    if (!node) return 0;
    let max = 0;

    function helper(node, height) {
      if (height > max) {
        max = height;
      }

      if (node.left !== null) {
        helper(node.left, height + 1);
      }

      if (node.right !== null) {
        helper(node.right, height + 1);
      }
    }
    helper(node, 0);
    return max;
  }

  maxSumHeight(tree) {

    let node = tree.root;
    if (!node) return null;
    let maxHeight = 0;
    let maxSum = 0;

    function helper(node, sum, height) {
      // console.log('height', height, 'sum', sum);
      let newHeight = height + 1;
      let newSum = sum + node.value;
      
      if (newHeight >= maxHeight) {
        maxHeight = newHeight;
        if(newSum > maxSum){
          maxSum = newSum;
        }
      }
      // console.log('newHeight', newHeight, 'maxHeight', maxHeight, 'newSum', newSum);
      if (node.left !== null) {
        helper(node.left, newSum, newHeight);
      }

      if (node.right !== null) {
        helper(node.right, newSum, newHeight);
      }
    }
    helper(node, maxSum, maxHeight);
    return `${maxSum} + ${maxHeight}`;
  }

  isBST(tree) {
    let node = tree.root;
    return this.isBSThelper(node, null, null);
  }
  /*
  When we branch left, the max gets updated
  when we branch right, the min gets updated
  */
  isBSThelper(node, min, max) {
    if(node === null){ //base case
      return true;  
    }
    // console.log(min, node.value, 'min');
    // console.log(max, node.value, 'max');
    if((min != null && node.value <= min) || (max != null && node.value > max)){
      return false;
    }
    if(!this.isBSThelper(node.left, min, node.value) || !this.isBSThelper(node.right, node.value, max)){
      return false;
    }
    return true;
  }


}
module.exports = BinaryTree;