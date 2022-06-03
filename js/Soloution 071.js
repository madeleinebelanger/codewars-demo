function removeEveryOther(arr){
let emptyArr=[]

for(let i=0; i<=arr.length; i++ )
{if (arr[i]%2==0) {emptyArr.push(i)}




}
return emptyArr



}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))