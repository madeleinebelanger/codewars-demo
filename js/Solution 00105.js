function switcheroo(x){
x=x.toLowerCase().split('')
return x.map(letters=> letters==='a'? 'b':letters==='b'? 'a':'c').join('')


}


console.log(switcheroo("abc"))