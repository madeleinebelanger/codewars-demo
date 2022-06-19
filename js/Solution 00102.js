function sumOfMinimums(arr) {
let newArr=[]
let newArr2=[]
for(let i = 0; i<arr.length; i++ ){
newArr.push(arr[i].sort((a,b)=>a-b))
}
for(let i=0; i<arr.length;i++){ newArr2.push(newArr[i][0])}
return newArr2.reduce((a,b)=>a+b)


}


console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))


// function sumOfMinimums(arr) {

// let newArr=arr.flat()
// newArr=newArr.sort((a,b)=> a-b)
// newArr=[...new Set(newArr)]
// let answer= newArr.slice(0,arr.length)
// return answer.reduce((a,b)=>a+b)
// }


// console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))