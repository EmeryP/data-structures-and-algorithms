'use strict';

let stacksAndQueues = require('../stack-and-queue.js');

describe('Stacks', () => {

  describe('Stacks -> Push', () => {

    it('The stack to be defined', () => {
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

  xdescribe('Peek', () => {

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