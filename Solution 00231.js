function narcissistic(value) {
let emptyArr=[]
let stringNum= value.toString().split('')
for(let i=0; i<stringNum.length; i++){
emptyArr.push(
Math.pow(stringNum[i],stringNum.length)
)}
let isNarcissistic= emptyArr.reduce((a,b)=>a+b)

return value==isNarcissistic?true:false 




}


