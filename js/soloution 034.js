function differenceInAges(ages){
ages=ages.sort((a,b)=>a-b)
let theDifference= (ages[ages.length-1]) - ages[0]
let answer=[]
answer.push(ages[0],(ages[ages.length-1]),theDifference,)
return answer

}



console.log(differenceInAges([82, 15, 6, 38, 35]))
