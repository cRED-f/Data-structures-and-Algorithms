//Stack tamplete for Linked List

class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  pop() {
    this.array.pop();
    return this;
  }
  push(value) {
    this.array.push(value);
    return this;
  }
}

const myStack = new Stack();

console.log(myStack.push("fahim"));
console.log(myStack.push("jahid"));
console.log(myStack.pop());
console.log(myStack.peek());
