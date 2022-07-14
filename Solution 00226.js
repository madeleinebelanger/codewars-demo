function filter_list(l) {
return l.filter(items=> typeof items === "number")


}

console.log(filter_list([1,2,'a','b']))