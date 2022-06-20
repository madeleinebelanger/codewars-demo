function isPangram(string){
let pangramCheck = 'abcdefghijklmnopqrstuvwxyz'
let sortedString= string.replace(/\s/g, "").toLowerCase().split('').sort()
let comparissonString=[... new Set(sortedString)].join('')
comparissonString
return (comparissonString===pangramCheck? true : false)


}

