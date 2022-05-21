function calculateTip(amount, rating) {

rating=rating.toLowerCase()
if(rating==="terrible"){
return amount
}
if(rating==="poor"){
return  Math.ceil(amount*.05)
}
if(rating==="good"){
return Math.ceil(amount*.10)
}
if(rating==="great"){
return Math.ceil(amount*.15)
}
if(rating==="excellent"){
return  Math.ceil(amount*.2)
}
else{return "Rating not recognised"}

}
console.log(calculateTip(29.95,"good"))

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%