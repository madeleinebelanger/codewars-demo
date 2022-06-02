function reverseWords(str) {
str= str.split(' ')

let answer= str.map(word=> word.split('').reverse('').join(''))
return answer.join(' ')


}
 
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
