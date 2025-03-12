import { Node, LinkedList } from "./linkedList.js";

class Key {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashMap {
  constructor(loadFactor, capacity) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.array = [];
    for (let i = 0; i < capacity; i++) {
      let newArray = [];
      this.array.push(newArray);
    }
  }

  hash(key) {
    this.hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      this.hashCode = primeNumber * this.hashCode + key.charCodeAt(i);
    }
    this.hashCode = this.hashCode % this.capacity;
    return this.hashCode;
  }

  set(key, value) {
    const newKey = new Key(key, value);
    this.hash(newKey.key);
    let fittingArray = this.array[this.hashCode];
    if (fittingArray.length === 0) {
      const list = new LinkedList();
      list.prepend(newKey.key, newKey.value);
      fittingArray.push(list);
    } else {
      const isItPresent = fittingArray[0].findKey(newKey.key);
      if (isItPresent === "true") {
        const indexKey = fittingArray[0].find(newKey.key);
        fittingArray[0].insertAt(newKey.key, newKey.value, indexKey);
      } else {
        fittingArray[0].append(newKey.key, newKey.value);
      }
    }
  }

  get(key) {
    this.hash(key);
    let fittingArray = this.array[this.hashCode];
    if (fittingArray.length === 0) {
      console.log("Key wasn't found!");
      return null;
    } else {
      const isItPresent = fittingArray[0].findKey(key);
      if (isItPresent === "true") {
        let arrFound = fittingArray[0].find(key);
        if (arrFound === 0) {
          return fittingArray[0].head.value;
        } else {
          let currentNode = fittingArray[0].head;
          while (arrFound > 0) {
            currentNode = currentNode.next;
            arrFound = arrFound - 1;
          }
          return currentNode.value;
        }
      } else {
        console.log("Key wasn't found!");
        return null;
      }
    }
  }

  has(key) {
    this.hash(key);
    let fittingArray = this.array[this.hashCode];
    if (fittingArray.length === 0) {
      console.log("Key wasn't found!");
      return false;
    } else {
      const isItPresent = fittingArray[0].findKey(key);
      if (isItPresent === "true") {
        console.log("key found!");
        return true;
      } else {
        console.log("key wasn't found!");
        return false;
      }
    }
  }
}

const testDing = new HashMap(0.8, 16);
testDing.set("apple", "red");
testDing.set("banana", "yellow");
testDing.set("carrot", "orange");
testDing.set("dog", "brown");
testDing.set("elephant", "gray");
testDing.set("frog", "green");
testDing.set("grape", "purple");
testDing.set("hat", "black");
testDing.set("ice cream", "white");
testDing.set("jacket", "blue");
testDing.set("kite", "pink");
testDing.set("lion", "golden");
testDing.set("lion", "blue");

console.log(testDing.get("pupi"));
console.log(testDing.has("grape"));
