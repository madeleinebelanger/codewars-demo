function hasUniqueChars(str){
let comparrisonString= [...new Set(str)].join('')
return comparrisonString === str ? true: false

}

console.log(hasUniqueChars("Aa"))