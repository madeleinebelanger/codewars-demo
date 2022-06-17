function contamination(text, char){
if(text.length==0){return text}
let emptyArr=[]
for(let i =1; i<= text.length; i++){
emptyArr.push(char)}
return emptyArr.join('')

}

console.log(contamination("Madies","z"))