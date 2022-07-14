function generateName(){
let result= ''
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let charactersLength= 6

for(let i=0; i< charactersLength; i++){
result += characters.charAt(Math.floor(Math.random()* charactersLength))

}



}

console.log(generateName())