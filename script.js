// Write your code here
class Pet {
  constructor(name, color, size) {
    this._name = name;
    this._color = color;
    this._size = size
  }

  get name() {
    return this._name;
  }

  get color() {
    return this._color;
  }

  get size() {
    return this._size;
  }

  eat() {
    console.log(`${this.name} ate their food. Thanks!`);
  };
};

class Cat extends Pet {
  constructor(name, color, size, isCute) {
    super(name, color, size);
    this.isCute = isCute
  }
};

class Dog extends Pet {
  constructor(name, color, size, isLoud) {
    super(name, color, size);
    this.isLoud = isLoud
  }
  bark(volume) {
    if (volume > 50) {
      console.log(`${this.name}: RUFF RUFF!!!!`)
    } else if (volume <= 50) {
      console.log(`${this.name}: ruff ruff!`)
    } else {
      console.log('Please pass in a number as an argument.')
    }
  }
}

const pippa = new Cat('Pippa', 'brown', 'small', true);
const paisley = new Dog('Paisley', 'light brown and white', 'huge', true);
console.log(pippa.size);
pippa.eat();
paisley.bark(40);
