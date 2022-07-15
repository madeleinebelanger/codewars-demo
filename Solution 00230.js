function printerError(s) {
let keptWord= s.split('').length
let filterOut= s.replace(/[a-m]/gi,'').split('').length
return `${filterOut}/${keptWord}`

}


console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))