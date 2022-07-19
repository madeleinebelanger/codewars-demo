function hello(name) {
  return name==undefined? `Hello, World!`: name===''? `Hello, World!`: `Hello, ${name}!`

}

console.log( hello(""))