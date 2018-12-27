# Stacks and Queues
Methods used to construct, deconstruct and sneak peeks of stacks and queues with JS & NodeJS

## Challenge
Create a Stack class with the following methods, push, pop and peek. Create a Queue class with the following methods, enqueue, dequeue, and peek. Each method must have 3 tests to confirm it's integrity.

## Approach & Efficiency

My approach was to use a Node constructor and each time I pushed a Node to the Stack or Queue I would create a new node. My Stacks and Queues were stored/built on an array which allowed me to use the built in JS array methods. I used this approach because it seemed like a commonly used approach after briefly searching around for related examples on the internet.

## API

### Methods:

#### Stacks
* `Push`: Adds a value to the top of the stack.
* `Pop`: Removes and returns the value from the top of the stack.
* `Peek`: Returns the value at the top of the stack, giving you a "peek".

#### Queue
* `Enqueue` Adds a value to the back of the queue.
* `Dequeeue` Removes a value from the front of the queue.
* `PeekQ` Returns the value at the front of the queue, giving you a "peek".


# 
# Queue with Stack
Manipulating a Stack so it functions the way a queue would function.

## Challenge
Create a brand new `PseudoQueue` class. Do not use an existing Queue. Instead, this `PseudoQueue` class will implement the standard queue interface, but will internally only utilize 2 Stack objects. Ensure that you create your class with the following methods: `enqueue` & `dequeue`. The `Stack` instances have only `push`, `pop` and `peek`.

## Solution

![Whiteboard](./assets/queue-with-stack.jpg)


# Fifo Animal Shelter
Manipulating a Stack so it functions the way a queue functions.

## Challenge
Create a class called `AnimalShelter` which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
  Implement the following methods:
* `Enqueue(animal)`: adds animal to the shelter. animal can be either a dog or a cat object.
* `Dequeue(pref)`: returns either a dog or a cat. If pref, a string, is ‘cat’ return the longest-waiting cat. If pref is ‘dog’, return the longest-waiting dog. For anything else, return either a cat or a dog.

## Solution

![Whiteboard](./assets/fifo-animal-shelter.jpg)
