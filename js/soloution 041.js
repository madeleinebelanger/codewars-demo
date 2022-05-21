function calculator(a,b,sign){
if(sign==="+"){
    return a+b}
if(sign==="-"){
    return a-b}
if(sign==="*"){
    return a*b}
if(sign==="/"){
    return a/b}
else{ return "unknown value"}



}

console.log(calculator(15,4,"+"))