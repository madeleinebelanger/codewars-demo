function highAndLow(numbers){
numbers=numbers.split(' ').map(nums=> Number(nums)).sort((a,b)=>a-b)
return `${numbers.slice(-1)} ${numbers[0]}`






}


console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))