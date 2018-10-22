
let LinkedList = require('../linked-list.js')

describe('Singly Linked Lists', () => {
  const list = LinkedList;

  describe('Create a list', () => {
    
    it('Linked List should construct', () => {
      expect(list).toBeDefined();
    })
  })

  describe('insert', () => {
    it('should insert value to head of list', () => {
      list.insert(5);
      expect(list.head.data).toBe(5);
    })
    it('should grow the list by + 1', () => {
      expect(list.size()).toBe(7)
    })
  })

  describe('Print', () => {
    it('should print something', () => {
      expect(list.print()).toBeDefined();
    })
    it('should print the head value in position one of the output array', () => {
      expect(list.print().slice(1, 3)).toEqual("5,");
    })
  })
  
  describe('Includes', () => {
    it('should include 70', () => {
      expect(list.includes(70)).toBe(true);
    })
    it('should not include 71', () => {
      expect(list.includes(71)).toEqual(false);
    })
  })

})