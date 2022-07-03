function tidyNumber(n){
let decreaseingNum= n.toString().split('').sort().join('')
return n==decreaseingNum? true:false 

}

console.log(tidyNumber(102))