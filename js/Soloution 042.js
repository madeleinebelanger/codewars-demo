const flip=(d, a)=>{
if(d==='R') {
let newArr= a.sort((x,y) =>x-y)
return newArr
}

else if(d==='L') {
let newArr= a.sort((x,y) =>y-x)
return newArr
}


}

console.log( flip('L', [1, 4, 5, 3, 5]))