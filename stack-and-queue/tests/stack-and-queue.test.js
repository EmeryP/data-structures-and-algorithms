'use strict';

let stacksAndQueues = require('../stack-and-queue.js');

describe('Stacks and Queues', () => {
  
  xdescribe('Stacks', () => {

    describe('Stacks -> Push', () => {

      xit('The stack to be defined after a single push', () => {
        const sandq = new stacksAndQueues();
        sandq.push(10);
        expect(sandq).toBeDefined();
      });

      xit('The length of the storage array should be 3 after 3 pushes', () => {
        const sandq = new stacksAndQueues();
        sandq.push(10);
        sandq.push(30);
        sandq.push(40);
        expect(sandq.storage.length).toBe(3);
      });

      it('The top of the stack should be equal to 40', () => {
        const sandq = new stacksAndQueues();
        sandq.push(10);
        sandq.push(30);
        sandq.push(40);
        expect(sandq.top.value).toBe(40);
      });

    });

    xdescribe('Stacks -> Pop', () => {

      it('The pop method to be defined', () => {
        const sandq = new stacksAndQueues();
        sandq.pop();
        expect(sandq).toBeDefined();
      });

      it('The length of the storage array should be (3 - 1) = 2', () => {
        const sandq = new stacksAndQueues();
        sandq.push(10);
        sandq.push(30);
        sandq.push(40);
        sandq.pop();
        expect(sandq.storage.length).toBe(2);
      });

      it('The popped off value should be equal to 40', () => {
        const sandq = new stacksAndQueues();
        sandq.push(10);
        sandq.push(30);
        sandq.push(40);
        expect(sandq.pop().value).toBe(40);
      });

    });

    xdescribe('Stacks -> Peek', () => {

      it('Will test if peek is defined after one push', () => {
        const sandq = new stacksAndQueues();
        sandq.push(10);
        expect(sandq.peek()).toBeDefined();
      });

      it('Will check if the top of the stack is equal to 40 after 3 pushes', () => {
        const sandq = new stacksAndQueues();
        sandq.push(10);
        sandq.push(30);
        sandq.push(40);
        expect(sandq.peek()).toBe(40);
      });

      it('Will check if the top of the stack is equal to the string peek', () => {
        const sandq = new stacksAndQueues();
        sandq.push(10);
        sandq.push(30);
        sandq.push('peek');
        expect(sandq.peek()).toBe('peek');
      });
    });
  });



  describe('Queues', () => {

    describe('Queues -> Enqueue', () => {

      it('Will test if the queue is defined after a single enqueue', () => {
        const sandq = new stacksAndQueues();
        sandq.enqueue(10);
        expect(sandq).toBeDefined();
      });

      it('The length of the storageQ array should be 3 after 3 enqueue calls', () => {
        const sandq = new stacksAndQueues();
        sandq.enqueue(10);
        sandq.enqueue(30);
        sandq.enqueue(40);
        expect(sandq.storageQ.length).toBe(3);
      });

      it('The front of the queue should be equal to 40', () => {
        const sandq = new stacksAndQueues();
        sandq.enqueue(10);
        sandq.enqueue(30);
        sandq.enqueue(40);
        expect(sandq.front.value).toBe(40);
      });

    });

    describe('Queues -> Dequeue', () => {

      it('Will test if the dequeue method is defined', () => {
        const sandq = new stacksAndQueues();
        sandq.dequeue();
        expect(sandq).toBeDefined();
      });

      it('The length of the storageQ array should be (3 - 1) = 2', () => {
        const sandq = new stacksAndQueues();
        sandq.enqueue(10);
        sandq.enqueue(30);
        sandq.enqueue(40);
        sandq.dequeue();
        expect(sandq.storageQ.length).toBe(2);
      });

      it('The dequeued value should be equal to 40', () => {
        const sandq = new stacksAndQueues();
        sandq.enqueue(10);
        sandq.enqueue(30);
        sandq.enqueue(40);
        expect(sandq.dequeue().value).toBe(10);
      });

    });

    describe('Queues -> PeekQ', () => {

      it('Will test if peekQ is defined after one enqueue', () => {
        const sandq = new stacksAndQueues();
        sandq.enqueue(10);
        expect(sandq.peekQ()).toBeDefined();
      });

      it('Will check if the front of the queue is equal to 10 after 3 enqueues', () => {
        const sandq = new stacksAndQueues();
        sandq.enqueue(10);
        sandq.enqueue(30);
        sandq.enqueue(40);
        expect(sandq.peekQ()).toBe(10);
      });

      it('Will check if the front of the stack is equal to the string peek', () => {
        const sandq = new stacksAndQueues();
        sandq.enqueue('front');
        sandq.enqueue(10);
        sandq.enqueue(30);
        expect(sandq.peekQ()).toBe('front');
      });
    });
  });




});
