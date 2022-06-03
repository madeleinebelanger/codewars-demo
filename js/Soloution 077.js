function minMax(arr){
arr=arr.sort((a,b)=>a-b)
let emptyArr= []
emptyArr.push(arr[0])
let lastNum= arr.length-1
emptyArr.push(arr[lastNum])
return emptyArr




}


console.log(minMax([0] ))