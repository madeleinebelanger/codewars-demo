// function getSum( a,b )
// {
// let emptyArr= []
// for(let i=a; i<=b; i++)
//     {emptyArr.push(i)}
// let answer= emptyArr.reduce((x,y)=> x+y)
// return answer



// }

// console.log( getSum(0,1))

function getSum( a,b )
{
if(a>b){
let emptyArr= []
for(let i=b; i<=a; i++)
    {emptyArr.push(i)}
let answer= emptyArr.reduce((x,y)=> x+y)
return answer
}

else if (b>a) {
let emptyArr= []
for(let i=a; i<=b; i++)
    {emptyArr.push(i)}
let answer= emptyArr.reduce((x,y)=> x+y)
return answer}

else if (a===b){
return a


}


}

console.log( getSum(-5,-5))