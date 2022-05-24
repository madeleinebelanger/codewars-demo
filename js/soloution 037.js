function shortcut (string) {
string=string.split('')
let newSting= string.filter(letter=> letter.replace(/[aeiou]/gi,''))
return newSting.join('')

}


console.log(shortcut("madie"))