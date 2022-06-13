function gimme (triplet) {
let original=triplet.slice(0)
let sorted= triplet.sort((a,b)=>a-b)
if(sorted[1]==original[0]){
    return 0}
else if(sorted[1]== original[1]){
    return 1}
else if(sorted[1]== original[2]){
    return 2}

}

console.log(gimme([15,1,14]))