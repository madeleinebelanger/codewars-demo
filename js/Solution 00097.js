function caffeineBuzz(n){
let answer = n%4==0 && n%2==0 ? "CoffeeScript": n%3==0 && n%2==0 ? "Javascript" :  n%3==0 ? "Java" : n%3==0 && n%4==0? "Coffee" :"mocha_missing!"


return answer


}

console.log(caffeineBuzz(12))