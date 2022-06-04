function sumDigits(number) {
number= Math.abs(number) 
number= number.toString().split('')
let array= number.map(num=> Number(num))
return array.reduce((a,b)=> a+b,0)




}

console.log(sumDigits(-32))