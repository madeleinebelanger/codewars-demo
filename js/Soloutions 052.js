function isIsogram(str){
let newString= str.toLowerCase()
newString=newString.split('')
let findDuplicates= newString.filter((a,b) => newString.indexOf(a) != b)
if(findDuplicates.length>0){return false}
else{return true}


}



console.log( isIsogram(""))