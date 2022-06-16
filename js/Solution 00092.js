function minValue(values){
let vals= [... new Set(values)]
return Number(vals.sort((a,b)=> a-b).join(''))




}


console.log(minValue([5, 6, 9, 9, 7, 6, 4]))