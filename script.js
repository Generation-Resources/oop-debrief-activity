// Write your code here
class Animal {
  constructor(type, color, size) {
    this.type = type;
    this.color = color;
    this.size = size;
  }
  greet() {
    console.log("hi");
  }
}

class Dog extends Animal {
  constructor(type, color, size, name) {
    super(type, color, size);
    this.name = name;
  }
  getName() {
    console.log(`Woof Woof my name is ${this.name}`);
  }

  getColor(){
      console.log(`My name is ${this.name} and I am a ${this.size} dog`)
  }
}
class Cat extends Animal {
  constructor(type, color, size, food) {
    super(type, color, size);
    this.food = food;
  }

  getFood() {
    console.log(`I eat ${this.food}`);
  }
  getColor() {
    console.log(`I am a ${this.type} and I am  ${this.color}`);
  }
}

const fluffy = new Dog("dog", "brown", "small", "fluffy");

const poofy = new Dog("dog", "brown", "small", "poofy");
const poofy2 = new Dog("dog", "brown", "small", "Poofy2");
poofy2.getName();
poofy.getName();
poofy2.getColor()
const scratchy = new Cat("cat", "orange", "large", "kibble");

const scratchy2 = new Cat("cat", "orange", "large", "pate");
scratchy2.getColor()
scratchy.getFood();
scratchy2.getFood();
