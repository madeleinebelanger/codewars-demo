function findUniq(arr) {
arr=arr.sort((a,b)=>a-b)
let lastArr= arr.slice(-1)
return arr[0]===arr[1]? lastArr[0] : arr[0]

}
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))