class Animal{
constructor(name,type) {
this.name=name
this.type=type
}

toString(){
return `${this.name} is a ${this.type}`

}



}

let Archie= new Animal("Archie","Cat")

console.log( Archie.toString() ) 