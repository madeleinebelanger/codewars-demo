function multiply(number){
if(number<0){
let index= number.toString().length-1
return number* Math.pow(5,index)
}

let index= number.toString().length
return number* Math.pow(5,index)



}

console.log(multiply(-3))