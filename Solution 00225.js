function spinWords(string){
string=string.split(' ')
return answer= string.map(items=> items.length>=5? items.split('').reverse('').join(''):items).join(' ')




}

console.log(spinWords("This is another test"))


// if(string[i].length>5){
// emptyArr.push(string[i].map(items=> items.split('').reverse('').join('')))}
// else{
// emptyArr.push(string[i])
