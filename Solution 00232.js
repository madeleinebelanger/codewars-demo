
















function solution(str){
str=str.split('')
let emptyArr=[]

if (str.length %2==0){
for(let i= 0; i<str.length; i+=2){emptyArr.push(
str[i]+str[i+1])}

}

else{

str.push('_')
for(let i= 0; i<str.length; i+=2){emptyArr.push(
str[i]+str[i+1])}


}

return emptyArr

}


console.log(solution('abcdefghi'))