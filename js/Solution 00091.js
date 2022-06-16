function getNumberFromString(s) {
return Number(s.replace(/[^0-9]/gi,''))
}

console.log(getNumberFromString("hell5o wor6Ld!!!"))