function sortMyString(S) {
S=S.split('')
let theEvens= S.filter((letters,index)=>index%2==0 ).join('')
let theOdds=S.filter((letters,index)=>index%2!==0 ).join('')
return theEvens + " "+theOdds

}

console.log(sortMyString("YCOLUE'VREER"))