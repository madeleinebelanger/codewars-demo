function divisors(integer) {
let emptyArr=[]
for(let i=2 ; i<integer; i++){
if(integer%i==0){emptyArr.push(i)}
}
if(emptyArr.length==0){
return `${integer} is prime`
}

else{
return emptyArr

}


};

 
console.log(divisors(12))
