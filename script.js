// Write your code here
class Animal {
    constructor(name, species, isPet) {
        this._name = name;
        this._species = species;
        this._isPet = isPet;
    }
    get name() {
        return this._name;
    }
    get species() {
        return this._species;
    }
    get isPet() {

        return this._isPet;
    }
    introduce() {
        console.log(`Hello, my name is ${this.name}, and I belong to ${this.species} species`);
    }
}
class Birds extends Animal {
    constructor(name, species, isPet, age) {
        super(name, species, isPet);
        this._age = age;
    }
    get age() {
        return this._age;
    }
    canFly() {
        console.log('I can fly');
    }
}
class Cat extends Animal {
    constructor(name, species, isPet, color) {
        super(name, species, isPet);
        this._color = color;
    }
    get color() {
        return this._color;
    }
    drinksMilk() {
        console.log('yummm... I love milk');
    }
}
const lion = new Animal('lion', 'mammal', 'not a pet')
const bird = new Birds('Raptor', 'bird', 'is a pet', 'not-known');
const kitty = new Cat('Fluffy', 'mammal', 'is a cute pet', 'white');
console.log(lion);
console.log(lion.isPet);
console.log(lion.name);
console.log(lion.species);
lion.introduce();

console.log(bird);
console.log(bird.age);
console.log(bird.isPet);
console.log(bird.name);
console.log(bird.species);
bird.canFly();
bird.introduce();

console.log(kitty);
console.log(kitty.name);
console.log(bird.isPet);
console.log(kitty.color);
console.log(bird.species);
kitty.drinksMilk();
kitty.introduce();