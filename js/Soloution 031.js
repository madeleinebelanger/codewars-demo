function remove (string) {
string=string.split('')
let check= string[string.length-1]
let newArr= string.slice(0,-1)
if(check=== "!") {
return newArr.join('')}
else{return string.join('')}

 
}

console.log( remove("madie"))
