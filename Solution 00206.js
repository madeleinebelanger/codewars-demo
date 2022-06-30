function XO(str) {
str=str.toLowerCase().split('')
const dupes ={}
str.forEach(item=> {dupes[item]=(dupes[item] ||0 )+1})
return dupes.o==dupes.x
}



console.log(XO("xxOo"))