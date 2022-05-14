function isPalindrome(x) {
x= x.toUpperCase()
let splitx =x.split('')
let newX=splitx.reverse().join('')
if(newX===x){
return true}

else{ return false}


}

