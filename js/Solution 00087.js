var greet = function(name) {
name=name.toLowerCase().split('')
let name2= name[0].toUpperCase() 
let name3= name.shift()
let name4= name2+name.join('')
return `Hello ${name4}!`

};


console.log(greet("MADELEINE"))