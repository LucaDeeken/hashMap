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
      let newArray = [i];
      this.array.push(newArray);
    }
  }

  hash(key) {
    this.hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      this.hashCode = primeNumber * this.hashCode + key.charCodeAt(i);
    }
    console.log(this.hashCode);
    this.hashCode = this.hashCode % this.capacity;
    console.log(this.hashCode);
    return this.hashCode;
  }

  set(key, value) {
    const newKey = new Key(key, value);
    this.hash(newKey.key);
    let fittingArray = this.array.find((arr) => arr.includes(this.hashCode));
    let fittingKey = fittingArray.find((item) => item.key === key);
    if (typeof fittingKey != "undefined") {
      fittingKey = value;
    } else {
      fittingArray.push(newKey);
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
testDing.set("lion", "golden");

console.log(testDing);
// testDing.hash("Luca");
