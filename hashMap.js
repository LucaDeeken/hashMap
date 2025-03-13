import { Node, LinkedList } from "./linkedList.js";

export class Key {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

export class HashMap {
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
    this.increaseCapacity();
  }

  increaseCapacity() {
    let hashMapSize = this.length();
    if (hashMapSize > this.capacity * this.loadFactor) {
      this.capacity = this.capacity * 2;
      let newArrays = this.capacity / 2;
      for (let i = 0; i < newArrays; i++) {
        let newArray = [];
        this.array.push(newArray);
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
  remove(key) {
    this.hash(key);
    let fittingArray = this.array[this.hashCode];
    if (fittingArray.length === 0) {
      console.log("Key wasn't found!");
      return false;
    } else {
      let arrFound = fittingArray[0].find(key);
      fittingArray[0].removeAt(arrFound);
      return true;
    }
  }
  length() {
    let incrementSize = 0;
    for (let bucket of this.array) {
      if (bucket.length === 0) {
        continue;
      } else {
        incrementSize = incrementSize + bucket[0].getSize();
      }
    }
    return incrementSize;
  }

  clear() {
    for (let bucket of this.array) {
      if (bucket.length !== 0) {
        bucket[0].head = null;
        bucket[0].key = undefined;
        bucket[0].value = undefined;
        bucket[0].size = 0;
      }
    }
    return console.log("HashMap was cleared!");
  }

  keys() {
    let outputArray = [];
    for (let bucket of this.array) {
      if (bucket.length === 0) {
        continue;
      } else {
        let bucketLength = bucket[0].size;
        bucketLength = bucketLength - 1;
        let firstElement = bucket[0].head;
        while (bucketLength > -1) {
          outputArray.push(firstElement.key);
          firstElement = firstElement.next;
          bucketLength = bucketLength - 1;
        }
      }
    }
    return outputArray;
  }
  values() {
    let outputArray = [];
    for (let bucket of this.array) {
      if (bucket.length === 0) {
        continue;
      } else {
        let bucketLength = bucket[0].size;
        bucketLength = bucketLength - 1;
        let firstElement = bucket[0].head;
        while (bucketLength > -1) {
          outputArray.push(firstElement.value);
          firstElement = firstElement.next;
          bucketLength = bucketLength - 1;
        }
      }
    }
    return outputArray;
  }
  entries() {
    let keyArray = this.keys();
    let valueArray = this.values();
    let entriesArray = [];
    const iterations = keyArray.length;
    for (let i = 0; i < iterations; i++) {
      let temporaryArray = [];
      let keyElement = keyArray.pop();
      let valueElement = valueArray.pop();
      temporaryArray.push(keyElement);
      temporaryArray.push(valueElement);
      entriesArray.push(temporaryArray);
    }
    return entriesArray;
  }
}

const testDing = new HashMap(0.75, 16);
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
console.log(testDing);
console.log(testDing.remove("lion"));
console.log(testDing);
console.log(testDing.length());
console.log(testDing.clear());
console.log(testDing);

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
console.log(testDing.keys());
console.log(testDing.values());
console.log(testDing.entries());
testDing.set("hats", "Pupi");
console.log(testDing);
