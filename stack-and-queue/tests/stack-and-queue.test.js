'use strict';

let stacksAndQueues = require('../stack-and-queue.js');

describe('Stacks', () => {

  describe('Stacks -> Push', () => {

    it('The stack to be defined after a single push', () => {
      const sandq = new stacksAndQueues();
      sandq.push(10);
      expect(sandq).toBeDefined();
    });

    it('The length of the storage array should be 3', () => {
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

  describe('Stacks -> Pop', () => {

    xit('The pop method to be defined', () => {
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
      // console.log(sandq.pop().value);
    });

  });

  xdescribe('Stacks -> Peek', () => {

    it('should test that peek is defined', () => {
      const sandq = new stacksAndQueues();
      sandq.push(10);
      expect(sandq.peek()).toBeDefined();
    });

    it('should check if the top of the stack is equal to 40', () => {
      const sandq = new stacksAndQueues();
      sandq.push(10);
      sandq.push(30);
      sandq.push(40);
      expect(sandq.peek()).toBe(40);
    });

  })



});