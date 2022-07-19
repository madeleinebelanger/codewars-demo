function powersOfTwo(n){
let nums=[]
for(let i=0; i<n+1; i++){
nums.push(i)
}
nums
return nums.map(items=>Math.pow(2,items))


}


console.log( powersOfTwo(4))