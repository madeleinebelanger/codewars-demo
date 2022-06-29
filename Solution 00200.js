function keysAndValues(data){
let keys= Object.keys(data)
let values= Object.values(data)
return [keys,values]


}

console.log(keysAndValues({a: 1, b: 2, c: 3}))