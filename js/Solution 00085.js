function whoIsPaying(name){
let emptyArr=[]
let nameLength= name.length
if(nameLength<= 2 || nameLength==0){
emptyArr.push(name) 
}

else{
emptyArr.push(name)
emptyArr.push(name.slice(0,2))
}

return emptyArr
}


console.log(whoIsPaying("maaa"))