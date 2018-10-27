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
    return this.top.value;
  }
}


class Queue {
  constructor(front = null){
    this.front = front;    
    this.storageQ = [];
  }

  enqueue(valQ){
    const oldFront = this.front;
    const newNodeQ = new Node(valQ, oldFront);
    this.front = newNodeQ;
    this.storageQ.unshift(newNodeQ);
    // assign front to be equal to the first node in the list
  }

  dequeue(){
    //assign front to the value of the following node
    return this.storageQ.pop();

  }

  peekQ(){
    // return this.front.value;
    return this.storageQ[this.storageQ.length-1].value;
  }
}

module.exports = Queue;

