function divisibleByThree(str){
str=str.split('')
let num= str.map(nums=> Number(nums)).reduce((a,b)=>a+b)
let answer = num%3==0? true : false
return answer





}


console.log(divisibleByThree("3333"))