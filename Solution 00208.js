function getNames(data){
  return data.map(items=> items.name)
}

console.log(getNames([
  {name: 'Joe', age: 20},
  {name: 'Bill', age: 30},
  {name: 'Kate', age: 23}
]
))