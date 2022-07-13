class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.status = status;
    this.species = species;
  }
  introduce(name,age,status) {

    return `Hello, my name is ${this.name} and I am ${this.age} years old. My status is ${this.status}`;
  }
}

class Shark extends Animal {
  constructor(name, status, age) {
    super(name,status,age);
  }
    


}

class Cat extends Animal {
  // Do the same here as you did for Shark - define your constructor function and any other methods you need
}

class Dog extends Animal {
  // On your own now - you can do it :D
}

let sharky= new Animal ("Sharky",10000,'Happy boi')

console.log(sharky.introduce())

