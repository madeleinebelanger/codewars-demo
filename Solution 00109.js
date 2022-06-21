function formatMoney(amount){
let keptAmount = amount
amount=amount.toString().split('.')
let afterTheDecimal= amount[1]
let answer =17/1
let moneyConversion = keptAmount%1==0? `$${amount}.00` : afterTheDecimal.length===2 ? `$${keptAmount}`: afterTheDecimal.length==1? `$${keptAmount}0`:15
return moneyConversion




}

console.log(formatMoney(39))
// 39.99 becomes $39.99

// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

// Examples:

// 3 needs to become $3.00

// 3.1 needs to become $3.10