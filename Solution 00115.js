function evenNumbers(array, number) {

let newArr= array.filter((nums)=>nums%2==0)
return newArr.slice(-number)



}

console.log( evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 2))