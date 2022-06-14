function bump(x){
x=x.split('')
let bumps= x.filter(bumps=> bumps=== 'n')
let canYouDrive = 15- bumps.length
if(canYouDrive<1) {
return "Car Dead"
}
else{
return "WooHoo!"
}


}

console.log(bump("_nnnnnn_n__n______nn__nn_nnn"))