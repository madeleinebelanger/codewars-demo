function isPangram(string){
let alphabet = "abcdefghijklmnopqrstuvwxyz"
string=string.replace(/[^a-z]/gi,'').toLowerCase().split('')
let newSet= [...new Set(string)].sort().join('')
return newSet===alphabet?true:false 






}

console.log( isPangram("The quick brown fox jumps over the lazy dog."))