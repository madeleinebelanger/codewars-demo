const binaryArrayToNumber = arr => {
arr=arr.join('').toString('')
return parseInt(arr,2)


}

console.log(binaryArrayToNumber([0,1,1,0]))