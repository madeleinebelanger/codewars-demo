function spongeMeme(sentence) {
sentence=sentence.toLowerCase().split('')
let answer = sentence.map((letter,index) => index%2==0? letter.toUpperCase(): letter).join('')
answer
}


console.log(spongeMeme("Hey my name is madie"))