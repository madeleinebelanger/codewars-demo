function reverseLetter(str) {
str=str.split('').reverse().join('')
let newArr= str.replace(/[^a-z]/gi, '') 
return newArr
}

console.log(reverseLetter('no35rtlu!!!!'))