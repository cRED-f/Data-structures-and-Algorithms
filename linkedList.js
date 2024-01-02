//linked list structures
// 10-->15-->16

// let linklist={
//   head:{
//     value:10,
//     next:{
//       value:15,
//       next:{
//         value:16,
//         next:null
//       }
//     }
//   }
// }
/*        SINGLY LINKED LIST        */
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
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(111);
myLinkedList.append(131);
myLinkedList.prepend(0);
myLinkedList.insert(99, 55);
myLinkedList.remove(4);
console.log(myLinkedList.printList());

/*        DOUBLY LINKED LIST        */
class Node {
  constructor(value) {
    (this.value = value), (this.next = null), (this.prev = null);
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
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
    newNode.prev = leader;
    newNode.next = holdingNode;
    holdingNode.prev = newNode;
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
}
const myLinkedList2 = new DoublyLinkedList(10);
myLinkedList2.append(1112);
// myLinkedList2.append(131);
myLinkedList2.prepend(0);
myLinkedList2.insert(2, 55);
// myLinkedList2.remove(4);
console.log(myLinkedList2.printList());
