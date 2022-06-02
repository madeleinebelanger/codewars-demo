function balancedNum(number)
{
let numberAsString= number.toString()
if(numberAsString.length==1){
    return 'Balanced'}

let emptyArr=[]
let leftSide=[]
let rightSied=[]
for(let i=0; i<numberAsString.length; i++){
    emptyArr.push(numberAsString[i])
}
let middleNum= emptyArr.length/2
middleNum
emptyArr

if(middleNum % 1 != 0)
for(let i=0; i<middleNum-1; i++){
        leftSide.push(Number(emptyArr[i]))
}
for(let i= middleNum+1; i<emptyArr.length; i++){
    rightSied.push(Number(emptyArr[i]))}

let rightsideSum= rightSied.reduce((a,b)=> a+b,0)
let leftSideSum= leftSide.reduce((a,b)=> a+b,0)

rightsideSum
leftSideSum


if(rightsideSum=== leftSideSum){
return "Balanced"
}


}

console.log(balancedNum(4322))

