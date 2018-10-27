'use strict';

class Node{
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

class Stack{
  constructor(top = null){
    this.top = top;
    this.storage = [];
  }

  push(val){
    const oldTop = this.top;
    const newNode = new Node(val, oldTop);
    this.top = newNode;
    this.storage.push(newNode);
  }

  pop(){
    return this.storage.pop();
  }

  peek(){
    return this.storage[this.storage.length-1];
  }
}



class Queue {
  constructor(valu){
    this.storageTwo = [];
  }

  enqueue(valu){
    this.storageTwo.push(valu);
  }

  dequeue(){
    return this.storageTwo.shift();

  }

  peek(){
    // console.log(this.storageTwo[this.storageTwo[0]]);
    return this.storageTwo[this.storageTwo[0]];
  }
}




module.exports = Stack, Queue;
