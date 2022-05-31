function longest(s1, s2) {
s1=s1.split('')
s2=s2.split('')
let longest= s1.concat(s2)
let answer= [...new Set(longest)]
answer
return answer.sort().join('')

}


console.log(longest("inmanylanguages", "theresapairoffunctions"))