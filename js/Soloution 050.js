function shortenToDate(longDate) {
let longDateSplit=longDate.split(' ')
let answer= longDateSplit.slice(0,-1).join(' ')
answer=answer.replace(',','')
return answer

}

console.log(shortenToDate("Friday May 2, 9am")) 
