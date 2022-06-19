
var countBits = function(n) {
let bin= (n).toString(2).split('')
return bin.filter(nums=> nums==1).length

};

console.log(countBits(10))