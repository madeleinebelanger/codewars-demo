// function greet(myName, yourName){
//   return "Hello " + yourName + ", my name is " + myName;
// }


// console.log(greet("Josh", "Madeleine"))

class Person{
constructor(myName){
this.myName=myName
}

greet(personsName){
return `Hello ${personsName}, my name is ${this.myName}`


}}

let madeleine= new Person("Madeleine")
madeleine
console.log( madeleine.greet("josh"))