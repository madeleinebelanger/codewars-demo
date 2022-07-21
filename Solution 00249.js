function count (string) {  
let duplicateChars={}
string=string.split('')
for(let num of string){
duplicateChars[num]=(duplicateChars[num]||0)+1

}

return duplicateChars
}


console.log(count('Butters best day ever!'))