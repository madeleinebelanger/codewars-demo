function f(n){
if(n<=0|| n%1!==0){return false}
let emptyArr=[]
for(let i=0; i<=n; i++){
emptyArr.push(i)}
return emptyArr.reduce((a,b)=>a+b)


};


console.log( f(0))