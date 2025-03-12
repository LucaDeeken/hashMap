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

  pop() {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }
    if (this.head.next === null) {
      this.head = null;
    } else {
      let current = this.head;
      while (current.next !== null && current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
    }
    this.size--;
  }
  contains(value) {
    let current = this.head;

    let counter = 0;
    while (current.value !== value) {
      current = current.next;
      counter = counter + 1;
      if (counter === this.size) {
        break;
      }
    }
    return current != null ? "true" : "false";
  }

  find(key) {
    let current = this.head;

    let counter = 0;
    while (current.key !== key) {
      console.log(key);
      console.log(current.key);
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
    console.log(current);
    let counter = 0;
    while (current.key !== key) {
      console.log(key);
      console.log(current.key)
      console.log(current.next);
      console.log(this.size);
      current = current.next;
      counter = counter + 1;
      if (counter === this.size) {
        break;
      }
    }
    return current != null ? "true" : "false";
  }

  toString() {
    let current = this.head;

    let string = "";
    for (let i = 0; i < this.size; i++) {
      if (i === this.size - 1) {
        string = string + " (" + current.value + ")";
      } else {
        string = string + " (" + current.value + ") ->";
      }
      current = current.next;
    }

    return string;
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
        console.log("YOOOO");
      }
    }
  }
}

const list = new LinkedList();
console.log("List is empty?", list.isEmpty());
console.log("List size", list.getSize());
list.prepend("dog");
list.prepend("cat");
list.prepend("cow");
list.append("snake");
console.log(list.getHead());
console.log(list.getTail());
console.log(list.getIndex(4));
console.log(list.contains("dog"));
console.log(list.find("cow"));
console.log(list.insertAt("Dino", 3));
console.log(list.toString());
