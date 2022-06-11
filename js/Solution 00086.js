function removeDuplicateWords (s) {
s=s.split(' ')
return [...new Set(s)].join(' ')
}


console.log(removeDuplicateWords("madie madie and her favorite jeans"))