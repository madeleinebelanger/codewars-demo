function chromosomeCheck(sperm) {
sperm=sperm.includes('Y')
sperm
if(sperm==true){return "Congratulations! You're going to have a son."}
else{ return "Congratulations! You're going to have a daughter."}

}

console.log( chromosomeCheck('XX'))