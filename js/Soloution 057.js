function solution(str, ending){
let strLength= str.length
let endingLenght= ending.length
let amountToCutOff= strLength-endingLenght

let ending1= str.slice(amountToCutOff)
if(ending===ending1) 
{return true}
else{return false}

}



console.log(solution('abcde', 'abc'))