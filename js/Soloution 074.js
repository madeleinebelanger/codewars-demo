function getDivisorsCnt(n){
let emptyArr=[]
for(let i=1; i<=n; i++)
{emptyArr.push(i)}

emptyArr

let answer = emptyArr.map(num=> n% num ==0)
let finalAnswer= answer.filter(tf=> tf==true)
return finalAnswer.length
answer



}

console.log(getDivisorsCnt(28))