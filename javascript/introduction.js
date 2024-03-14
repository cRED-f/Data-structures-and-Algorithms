class player {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`I am ${this.name}. I am ${this.age} years old`);
  }
}

class cricket extends player {
  constructor(name, age) {
    super(name, age);
  }
  play() {
    console.log(`I am ${this.name}. A cricket player and my age is {this.age}`);
  }
}

const player1 = new cricket("fahim", 23);
player1.introduce();
