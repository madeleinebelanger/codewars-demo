function correct(string){
string=string.split('')
return string.map(items=> items==="0"?"O":items==="5"? "S": items==="1"?"I":items).join('')


}

console.log(correct(("123s5")))