function changeMe(moneyIn){
let twenty= '20p '
let ten= '10p'
let answer= moneyIn==='£5'? twenty.repeat(25).trim() : moneyIn==='£2'? twenty.repeat(10) : moneyIn==="£1" ? twenty.repeat(5) : moneyIn=== '50p' ? "20p 20p 10p": moneyIn=== '20p'? "10p 10p" : moneyIn
return answer.trim()


}


console.log(changeMe('£5'))