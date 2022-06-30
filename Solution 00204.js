function squareDigits(num){
num=num.toString().split('').map(num=>Number(num))
num=num.map(num=> num*num).join('')
return Number(num)



}


console.log(squareDigits(9119))