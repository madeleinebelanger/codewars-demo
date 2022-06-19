function explode(s) {
let emptyArr=[]
let emptyArr2=[]
let numbers= Number(s)
for(let i =0; i<s.length; i++){
emptyArr.push(s[i])
}
emptyArr

for(let i = 0; i<s.length; i++){
emptyArr2.push(emptyArr[i].repeat(emptyArr[i]))
}
return emptyArr2.join('').toString()
}



console.log(explode('1732'))