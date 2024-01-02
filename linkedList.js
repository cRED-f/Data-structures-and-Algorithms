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

class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
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
}
const myLinkedList = new LinkedList(10);
myLinkedList.append(111);
myLinkedList.append(131);
myLinkedList.prepend(0);
console.log(myLinkedList.printList());
