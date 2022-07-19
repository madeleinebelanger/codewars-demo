function lowercaseCount(str){
let count= str.replace(/[^a-z]/gi,'').split('')
return count.filter(items=> items===items.toLowerCase()).length
}

console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"))