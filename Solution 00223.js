function findOdd(A) {
A=A.sort()
let sortedObjects= {}
for(const num of A){
sortedObjects[num] = sortedObjects[num]? sortedObjects[num]+1:1}

return sortedObjects




}







console.log(findOdd([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]))