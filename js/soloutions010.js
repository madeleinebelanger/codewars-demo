function descendingOrder(n){
let newN= n.toString().split('')
newN= newN.sort((a,b)=> b-a)
answer= Number(newN.join(''))
return answer 


}
console.log(descendingOrder(122132312))
