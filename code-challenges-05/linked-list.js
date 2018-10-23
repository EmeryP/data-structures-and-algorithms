
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
      console.log(this.head, 'in the append')
      
      while(current.next !== null){
        current = current.next
      }
    current.next = new Node(val)
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

  let sll = new LinkedList();

  sll.insert(1)
  sll.insert(3)
  sll.append(2)
  sll.print()

module.exports = LinkedList


