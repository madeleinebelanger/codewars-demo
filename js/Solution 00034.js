<<<<<<< HEAD
function chromosomeCheck(sperm) {
sperm=sperm.includes('Y')
sperm
if(sperm==true){return "Congratulations! You're going to have a son."}
else{ return "Congratulations! You're going to have a daughter."}

}

console.log( chromosomeCheck('XX'))
=======
function differenceInAges(ages){
ages=ages.sort((a,b)=>a-b)
let theDifference= (ages[ages.length-1]) - ages[0]
let answer=[]
answer.push(ages[0],(ages[ages.length-1]),theDifference,)
return answer

}



console.log(differenceInAges([82, 15, 6, 38, 35]))
>>>>>>> 7be487d422cb9a87c6f3a9ce4a767fd51d52aae4
