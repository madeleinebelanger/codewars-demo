function findShort(s){
let emptyArr=[]
s=s.split(' ')
for(let i=0; i<s.length;i++)
    {emptyArr.push(  s[i].length  )}
let answer= emptyArr.sort((a,b) => a-b) 
return answer[0]
}

(console.log( findShort("bitcoin take over the world maybe who knows perhaps")))