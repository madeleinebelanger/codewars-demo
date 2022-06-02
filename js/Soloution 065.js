function oddOrEven(array) {
let sum= array.reduce((a,b)=> a+b,0)
let testy= sum%2


if(sum%2==0){
return "even"}

else{

return "odd"}


}


console.log(oddOrEven([1023, 2, 2])) 
