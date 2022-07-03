function remove (string) {
string=string.split('')
string= string.filter(letters=> letters!== '!').join('')
return `${string}!`
}

console.log( remove(("Hi! Hi!")))