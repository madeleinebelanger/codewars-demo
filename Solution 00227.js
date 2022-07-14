













function accum(s) {
s=s.split('')
let index= s.map((items,index)=>items.repeat(index+1).toLowerCase())
let answer= index.map(items=> items.charAt(0).toUpperCase()+items.slice(1)).join('-')
return answer


}

console.log(accum("ZpglnRxqenU"))