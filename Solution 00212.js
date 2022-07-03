function sumArray(array) {
if(array==[] || array==null || array.length==1 ){return 0}
array=array.sort((a,b)=>a-b)
array=array.slice(1,-1)
return array.reduce((a,b)=>a+b,0)

}

console.log( sumArray([ 6, 2, 1, 8, 10 ]))