class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;

  }
  introduce(name,age,status) {

    return `Hello, my name is ${this.name} and I am ${this.age} years old. `;
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
    constructor(name,age,status){
    super(name,age,4,"cat",status)
}
introduce(name,age,status){
return   `Hello, my name is ${this.name} and I am ${this.age} years old. Meow meow!`

}


}

class Dog extends Animal {
constructor(name,age,status,master){
super(name,age,4,"dog",status)
this.master=master

}

  introduce(name,age,status) {

    return `Hello, my name is ${this.name} and I am ${this.age} years old. `;
  }

 greetMaster(){
    return `Hello ${this.master}`
}

}
