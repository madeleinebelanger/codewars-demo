// write the function isAnagram
var isAnagram = function(test, original) {
test=test.toUpperCase()
original=original.toUpperCase()
test=test.split('').sort().join('')
original=original.split('').sort().join('')
if(original===test) {return true}
else{return false}




};

console.log( isAnagram('Buckethead','DeathCubeK'))