//testing 123
// class Node {                                                                                        
//   constructor(data){
//     this.data = data;
//     this.next = this.head;
//   }
// }

class LinkedList {

  constructor(){ 
    this.head = null;
  }

  ///////////////////////////////
  isEmpty(){
    return this.head === null;
  }

  //////////////////////////////
  size(){
    var current = this.head;
    var count = 0;

    while(current !== null){
      count++;
      current = current.next;
    }
    return count;
  }

  //////////////////////////////
  insert(val){ 

    let newNode = {
      data: val,
      next: this.head
    };
    // let newNode = new Node(val);
    this.head = newNode;  
    // console.log(newNode, 'newnode')
  }
  
  /////////////////////////////
  includes(val){
    var current = this.head;
      while(current !== null){
        if(current.data === val){
          return true;
        }
        current = current.next;
      }
      return false;
  }

  /////////////////////////////
  print(){
    var output = '[';
    var current = this.head;

    while(current != null){
        output += current.data;
        if(current.next !== null){
            output += ',';
          }
          current = current.next;
    }
    output += ']';
    return output;
  }

}

var sll = new LinkedList();
sll.insert(20)
sll.insert(30)
sll.insert(40)
sll.insert(50)
sll.insert(60)
sll.insert(70)
// sll.print()
// console.log(sll)
// console.log(sll.contains(20))
// console.log(sll.size())
// console.log(sll.isEmpty())

module.exports = sll;



/*
JB Code

class LinkedList = {
  constructor(node = null){
    this.head = node;
  }

  insert(value){

    const oldHead = this.head

    //create node with given value
    const newNode = new Node(value, oldHead);

    //set new head's next to be old head
    // newNode.next = this.head 

    //set head to new node
    this.head = newNode

  }

  includes(value){
    //starting at head
    let current = this.head

    //ask each node if it has the value (loop) 
    while(current){
      if(current.value === value){
        return true
      }
      current = current.next;
    }
    return false;
    //if so return true, 
    //if no move to next if not null
  }
}

class Node = {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}


module.exports = {
  LinkedList, Node
}

*/