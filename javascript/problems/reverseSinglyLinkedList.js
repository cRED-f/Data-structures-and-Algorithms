class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currNode = this.head;
    while (currNode !== null) {
      array.push(currNode.value);
      currNode = currNode.next;
    }
    return array;
  }

  insert(index, value) {
    //check params
    if (index >= this.length) return this.append(value);

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingNode = leader.next;
    leader.next = newNode;
    newNode.next = holdingNode;
    this.length++;
    return this.printList();
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const deletingNode = leader.next;
    leader.next = deletingNode.next;
    this.length--;
    return this.printList();
  }

  traverseToIndex(index) {
    let count = 0;
    let currNode = this.head;
    while (count !== index) {
      currNode = currNode.next;
      count++;
    }
    return currNode;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(111);
myLinkedList.append(131);
myLinkedList.insert(99, 55);
myLinkedList.reverse();

console.log(myLinkedList.printList());
