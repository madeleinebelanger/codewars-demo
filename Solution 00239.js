function duplicateCount(text){
text=text.toLowerCase().split('')
let dups={}

let count= text.forEach(items=> dups[items]= (dups[items]||0)+1)


let answer = Object.values(dups).filter(items=> items>1)
return answer.length
}



console.log(duplicateCount(("aabBcde")))