function doubleChar(str) {
let emptyArr=[]
str=str.split('')
for(let i=0; i<str.length; i++){
emptyArr.push(str[i]+str[i])
}
return emptyArr.join('')}


console.log (doubleChar("madies fave jeans"))