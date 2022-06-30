function findOutlier(integers){
let evens= integers.filter(nums=>nums%2==0)
let odds= integers.filter(nums=>nums%2!==0)
return odds.length==1? odds[0] : evens[0]


}

console.log(findOutlier([2,6,8,10,3]))