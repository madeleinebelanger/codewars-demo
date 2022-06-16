function solve(s){
let keptArray= s.slice()
s=s.split('')
let uppers=s.filter(letters=>letters== letters.toUpperCase())
let lowers=s.filter(letters=>letters== letters.toLowerCase())
uppers
lowers




if(uppers.length==lowers.length){
return keptArray.toLowerCase()}


else if(uppers.length>lowers.length){
return keptArray.toUpperCase()
} 

else if(lowers.length>uppers.length){
return keptArray.toLowerCase()
} 

}


console.log(solve("Ma "))
