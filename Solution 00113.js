function divCon(x){
let nums= x.filter(number=> typeof number === 'number').reduce((a,b)=>a+b,0)
let nums2= x.filter(number=> typeof number === 'string').map(nums=> Number(nums)).reduce((a,b)=>a+b,0)
return nums-nums2
}


console.log(divCon(([9, 3, '7', '3'])))