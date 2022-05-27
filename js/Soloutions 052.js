function isIsogram(str){
str=str.split('')
let answer= str.map( item=> item.toLowerCase())
let findDuplicates= answer.filter((a,b) => str.indexOf(a) != b)

if(findDuplicates.length>0){return false}
else{return true}
}



console.log( isIsogram("Dermatoglyphics"))