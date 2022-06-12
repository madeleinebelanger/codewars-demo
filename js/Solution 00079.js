function removeUrlAnchor(url){
let newArr= url.split('#')
return newArr[0]

}

console.log(removeUrlAnchor( 'www.codewars.com#about'))
