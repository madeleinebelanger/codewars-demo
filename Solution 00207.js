function moveZeros(arr) {
let zeros= arr.filter(items=> items===0)
let others= arr.filter(items=> items!==0)
return others.concat(zeros)
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))