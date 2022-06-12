function strCount(str, letter){ 
str=str.split('')
str=str.filter(element=> element == letter)
return str.length 

}
strCount("madiee eee" ,"e")
