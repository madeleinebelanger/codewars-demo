function toCamelCase(str){
if(str.includes('-')){

let keptStr= str.slice().split('-')
let newStr =str.split('-').slice(1)
let newString= newStr.map((items)=> items.split(''))
let answer= newString.map(items=> items[0].toUpperCase()+items.slice(1)).join('').replace(/,/gi,'')
return keptStr[0]+ answer

}
else{

let keptStr= str.slice().split('_')
let newStr =str.split('_').slice(1)
let newString= newStr.map((items)=> items.split(''))
let answer= newString.map(items=> items[0].toUpperCase()+items.slice(1)).join('').replace(/,/gi,'')
return keptStr[0]+ answer


}



}

console.log( toCamelCase("The_Stealth_Warrior"))