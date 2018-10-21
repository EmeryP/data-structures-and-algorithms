
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

  isEmpty(){
    return this.head === null;
  }

  size(){
    var current = this.head;
    var count = 0;

    while(current !== null){
      count++;
      current = current.next;
    }
    return count;
  }

  insert(val){ 

    let newNode = {
      data: val,
      next: this.head
    };
    // var node = new Node(val);

    this.head = newNode;
    // if(!this.head){ 
    //   this.head = node;
    //   return node;
    // } else { 
    //   console.log(this.head)
    //   var current = this.head 
    //   while(current.next){ 
    //   }
    // }
    // current.next = node; 
    // return node;    
  }
  
  contains(val){
    var current = this.head;
    console.log(current)
      while(current !== null){
        if(current.data === val){
          return true;
        }
        current = current.next;
      }
      return false;
  }

  print(){
    var output = '[';
    var current = this.head;

    while(current !== null){
      output += current.data;
      if(current.next !== null){
        output += ',';
      }
      current = current.next;
    }
    output += ']';
    console.log(output);
  }

}

var sll = new LinkedList();
sll.insert(20)
sll.insert(30)
sll.insert(40)
sll.insert(50)
sll.insert(60)
sll.insert(70)
sll.print()
console.log(sll.contains(20))
console.log(sll.size())
console.log(sll.isEmpty())



// 60 is not pointing to 70


//let nums = new LinkedList(); //sets nums = to a new linkedList and creates a head property
//nums.head = new Node(1) //set the head value of new LinkedList to be a node with data property equal to 1 and next to null
//nums.head.next = new Node(2); //sets next value to be equal to value of new Node with data property of 2
// console.log(nums.head)


