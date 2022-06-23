function rowWeights(array){
let answer =[]

let arr1=answer.push(array.filter((nums,index)=> index %2===0).reduce((a,b)=>a+b,0))
let arr2=answer.push(array.filter((nums,index)=> index%2).reduce((a,b)=>a+b,0))
return answer
}

console.log(rowWeights([100,51,50,100]))