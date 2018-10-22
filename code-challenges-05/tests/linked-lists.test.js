
let LinkedList = require('../linked-list.js')

describe('Singly Linked Lists', () => {
  const list = new LinkedList();

  describe('Create a list', () => {
    it('Linked List should construct', () => {
  const list = new LinkedList();      
      list.insert(20)
      list.insert(30)
      list.insert(40)
      expect(list).toBeDefined();
    })
  })

  describe('insert', () => {
    it('should insert value to head of list', () => {
      const list = new LinkedList();      
      list.insert(20)
      list.insert(30)
      list.insert(40)
      list.insert(5)      
      expect(list.head.data).toBe(5);
    })
    it('should grow the list by 1', () => {
      const list = new LinkedList();      
      list.insert(20)
      list.insert(30)
      list.insert(40)
      list.insert(5)      
      expect(list.size()).toBe(4)
    })
  })

  describe('Print', () => {
    it('should print something', () => {
      const list = new LinkedList();      
      list.insert(20)
      list.insert(30)
      list.insert(40)
      list.append(5)
      expect(list.print()).toBeDefined();
    })
    it('should print the head value in position one of the output array', () => {
      const list = new LinkedList();      
      list.insert(20)
      list.insert(30)
      list.insert(40)
      list.insert(5)
      expect(list.print().slice(1, 3)).toEqual("5,");
    })
  })
  
  describe('Includes', () => {
    it('should include 70', () => {
      const list = new LinkedList();      
      list.insert(20)
      list.insert(30)
      list.insert(40)
      list.append(70)
      expect(list.includes(70)).toBe(true);
    })
    it('should not include 71', () => {
      const list = new LinkedList();      
      list.insert(20)
      list.insert(30)
      list.insert(40)
      list.append(5)
      expect(list.includes(71)).toEqual(false);
    })
  })

  describe('Append', () => {
    it('should check to see if the list includes the input value', () => { 
      const list = new LinkedList();      
      list.insert(20)
      list.insert(30)
      list.insert(40)
      list.append(5)
      expect(list.includes(5)).toBe(true)
    })
    it('should test if the length of the linked list grew by one', () => {
      const list = new LinkedList();      
      list.insert(20)
      list.insert(30)
      list.insert(40)
      list.append(5)
      expect(list.size()).toBe(4);
    })
  })

})