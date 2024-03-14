//hash table
//hash table is a data structure that used to store key-value pairs
//note in object in js, the key is always a string
//but Map in js, the key can be any data type
//Set is a data structure that only stores keys, no values
let user = {
  age: 33,
  name: "asly",
  bang: true,
  scream: () => console.log("ahhhhhhh!"),
};

// console.log(user.age); //0(1)
// console.log((user.spell = "abra kadabra")); //0(1)
// user.scream(); //0(1)

class hashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  } //0(1) if no collision happens but if collision happens then it will be 0(n)
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
  } //0(1) if no collision happens but if collision happens then it will be 0(n)

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      //if it is not an empty memory cell
      if (this.data[i]) {
        //but also loop through all the potential collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keysArray.push(this.data[i][j][0]); //push the key into the array
          }
        } else {
          keysArray.push(this.data[i][0]);
        }
      }
    }
    return keysArray;
  } //0(n)
}

const myHashTable = new hashTable(50);
console.log(myHashTable.set("fahim", 100));
console.log(myHashTable.set("fahim", 100));
console.log(myHashTable.get("fahim"));
