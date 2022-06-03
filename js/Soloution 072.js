function smallEnough(a, limit){
let answer= a.filter(num=> num<=limit)
let num1= answer.length
let num2= a.length
if(num1==num2){return true}
else{return false}


}

