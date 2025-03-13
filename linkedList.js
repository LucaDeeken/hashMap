export class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  append(key, value) {
    const node = new Node(key, value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  prepend(key, value) {
    const node = new Node(key, value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }
    let tail = current;
    return tail;
  }

  getIndex(index) {
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    if (current === null) {
      console.log("Index not found");
      return;
    }
    return current;
  }

  find(key) {
    let current = this.head;

    let counter = 0;
    while (current.key !== key) {
      current = current.next;
      counter = counter + 1;
      if (counter === this.size) {
        break;
      }
    }
    return current != null ? counter : null;
  }

  findKey(key) {
    let current = this.head;
    while (current !== null) {
      if (current.key === key) {
        return "true";
      }
      current = current.next;
    }
    return "false";
  }

  removeAt(index) {
    if (index === 0) {
      let current = this.head;
      current = current.next;
      this.head = current;
    } else {
      let nodeBefore = this.getIndex(index - 1);
      nodeBefore.next = nodeBefore.next.next;
    }
    this.size--;
  }

  insertAt(key, value, index) {
    if (index + 1 > this.size) {
      console.log("Index wasn't found");
      return;
    } else {
      if (index === 0) {
        this.head.value = value;
        this.head.key = key;
      } else {
        let node = this.getIndex(index);
        node.value = value;
        node.key = key;
      }
    }
  }
}