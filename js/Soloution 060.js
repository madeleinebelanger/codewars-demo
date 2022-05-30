function SeriesSum(n){
let sum= -2
let emptyArr= []
for(let i=1; i<=n; i++)
        {emptyArr.push(sum+=3)}
let percentages = emptyArr.map(num=> 1/num)
let answer= percentages.reduce((a,b)=> a+b,0)
return answer.toFixed(2)

}



console.log( SeriesSum()) 
