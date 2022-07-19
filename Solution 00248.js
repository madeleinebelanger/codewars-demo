function pipeFix(numbers){
let correctPipe=[]
let start=numbers[0]
let end= numbers[numbers.length-1]

for(let i=start; i<end+1;i++){
correctPipe.push(i)
}

return correctPipe
}


console.log(pipeFix([-1,4]))