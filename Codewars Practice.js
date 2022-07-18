function feast(beast, dish) {
beast=beast.split('')
dish=dish.split('')
return (beast[0]===dish[0]) && (beast[beast.length-1]===dish[dish.length-1]) ? true:false 


}

console.log(feast("great blue heron", "garlic naan"))