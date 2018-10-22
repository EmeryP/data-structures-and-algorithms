
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
    this.head = newNode;  
    // let newNode = new Node(val);
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



