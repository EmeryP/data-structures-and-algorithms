class Node{
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor(front = null){
    this.front = front;    
    this.storageQ = [];
  }

  enqueue(valQ){

    if(this.storageQ.length === 0){
      const oldFront = this.front;
      const newNodeQ = new Node(valQ, oldFront);
      this.front = newNodeQ;
      this.storageQ.unshift(newNodeQ);
    } else {
      const newNodeQ = new Node(valQ);      
      this.storageQ.unshift(newNodeQ); 
    }
  }

  dequeue(){
    return this.storageQ.pop();
  }

  peekQ(){
    return this.front.value;
  }

  breadthFirst(front){
    //code will go here, imagine it if you can!
  }
}