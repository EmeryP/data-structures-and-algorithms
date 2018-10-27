'use strict';

const stacksAndQueues = require('../stack-and-queue.js');
// const Stacks = classes.Stack;
// const Queues = classes.Queue;


describe('Stacks and Queues', () => {
  
  describe('Stacks', () => {

    describe('Stacks -> Push', () => {

      it('The stack to be defined after a single push', () => {
        const sandq = new stacksAndQueues.Stack();
        sandq.push(10);
        expect(sandq).toBeDefined();
      });

      it('The length of the storage array should be 3 after 3 pushes', () => {
        const sandq = new stacksAndQueues.Stack();
        sandq.push(10);
        sandq.push(30);
        sandq.push(40);
        expect(sandq.storage.length).toBe(3);
      });

      it('The top of the stack should be equal to 40', () => {
        const sandq = new stacksAndQueues.Stack();
        sandq.push(10);
        sandq.push(30);
        sandq.push(40);
        expect(sandq.top.value).toBe(40);
      });

    });

    describe('Stacks -> Pop', () => {

      it('The pop method to be defined', () => {
        const sandq = new stacksAndQueues.Stack();
        sandq.pop();
        expect(sandq).toBeDefined();
      });

      it('The length of the storage array should be (3 - 1) = 2', () => {
        const sandq = new stacksAndQueues.Stack();
        sandq.push(10);
        sandq.push(30);
        sandq.push(40);
        sandq.pop();
        expect(sandq.storage.length).toBe(2);
      });

      it('The popped off value should be equal to 40', () => {
        const sandq = new stacksAndQueues.Stack();
        sandq.push(10);
        sandq.push(30);
        sandq.push(40);
        expect(sandq.pop().value).toBe(40);
      });

    });

    describe('Stacks -> Peek', () => {

      it('Will test if peek is defined after one push', () => {
        const sandq = new stacksAndQueues.Stack();
        sandq.push(10);
        expect(sandq.peek()).toBeDefined();
      });

      it('Will check if the top of the stack is equal to 40 after 3 pushes', () => {
        const sandq = new stacksAndQueues.Stack();
        sandq.push(10);
        sandq.push(30);
        sandq.push(40);
        expect(sandq.peek()).toBe(40);
      });

      it('Will check if the top of the stack is equal to the string peek', () => {
        const sandq = new stacksAndQueues.Stack();
        sandq.push(10);
        sandq.push(30);
        sandq.push('peek');
        expect(sandq.peek()).toBe('peek');
      });
    });
  });



  describe('Queues', () => {

    describe('Queues -> Enqueue', () => {

      it('Will test if the queue is defined after invoking enqueue once', () => {
        const sandq = new stacksAndQueues.Queue();
        sandq.enqueue(10);
        expect(sandq).toBeDefined();
      });

      it('Will test the length of the storageQ array should be 3 after invoking enqueue 3x', () => {
        const sandq = new stacksAndQueues.Queue();
        sandq.enqueue(10);
        sandq.enqueue(30);
        sandq.enqueue(40);
        expect(sandq.storageQ.length).toBe(3);
      });

      it('Will test if the value of the Node at the front of the queue is equal to 10', () => {
        const sandq = new stacksAndQueues.Queue();
        sandq.enqueue(10);
        sandq.enqueue(30);
        sandq.enqueue(40);
        expect(sandq.front.value).toBe(10);
      });

    });

    describe('Queues -> Dequeue', () => {

      it('Will test if the dequeue method is defined after a single invocation', () => {
        const sandq = new stacksAndQueues.Queue();
        sandq.dequeue();
        expect(sandq).toBeDefined();
      });

      it('Will test if dequeue returns the proper length of the queue after one invocation', () => {
        const sandq = new stacksAndQueues.Queue();
        sandq.enqueue(10);
        sandq.enqueue(30);
        sandq.enqueue(40);
        sandq.dequeue();
        expect(sandq.storageQ.length).toBe(2);
      });

      it('The dequeued value should be equal to 10', () => {
        const sandq = new stacksAndQueues.Queue();
        sandq.enqueue(10);
        sandq.enqueue(30);
        sandq.enqueue(40);
        expect(sandq.dequeue().value).toBe(10);
      });

      xit('Will test if the front value is reassigned after a single invocation of dequeue', () => {
        const sandq = new stacksAndQueues.Queue();
        sandq.enqueue(10);
        sandq.enqueue(30);
        sandq.enqueue(40);
        console.log(sandq.front.value);
        console.log(sandq.storageQ);        
        sandq.dequeue();
        console.log(sandq.storageQ);                
        console.log(sandq.front.value);        
        // expect(sandq.front.value).toBe(30);
      });

    });

    describe('Queues -> PeekQ', () => {

      it('Will test if peekQ is defined after one enqueue invocation', () => {
        const sandq = new stacksAndQueues.Queue();
        sandq.enqueue(10);
        expect(sandq.peekQ()).toBeDefined();
      });

      it('Will test if the value of the Node at the front of the queue is equal to the number 10 after 3 enqueue invocations', () => {
        const sandq = new stacksAndQueues.Queue();
        sandq.enqueue(10);
        sandq.enqueue(30);
        sandq.enqueue(40);
        expect(sandq.peekQ()).toBe(10);
      });

      it('Will test if the value of the Node at the front of the queue is equal to the string peek', () => {
        const sandq = new stacksAndQueues.Queue();
        sandq.enqueue('front');
        sandq.enqueue(10);
        sandq.enqueue(30);
        expect(sandq.peekQ()).toBe('front');
      });
    });
  });

});
