

class Node {                                                                                        
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {

  constructor(node = null){ 
    this.head = node;
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

    const oldHead = this.head
    const newNode = new Node(val, oldHead)
    this.head = newNode
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
  append(val){
    let current = this.head;

    while(current.next !== null){
      current = current.next
    }
    current.next = new Node(val)
    console.log(current.next)
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
    console.log(output);
    return output;
  }

}

var sll = new LinkedList();
sll.insert(20)
sll.insert(30)
sll.insert(40)
sll.append(50)
sll.insert(70)
sll.append(100)

sll.print()

module.exports = {
  LinkedList, Node
};

