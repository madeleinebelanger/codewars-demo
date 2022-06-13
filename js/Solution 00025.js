function isPalindrome(line) {
let line1=line.split('')
let line2= line1.reverse('').join('')


if(line.toUpperCase() === line2.toUpperCase()){
return true
}
else{ return false}

}


console.log(isPalindrome("anna"))