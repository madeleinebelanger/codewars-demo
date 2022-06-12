function arithmetic(a, b, operator){
operator=operator.replace('add','+')
operator=operator.replace('subtract','-')
operator=operator.replace('multiply','*')
operator=operator.replace('divide','/')
let answer = eval(a+operator+b)
return answer
}
console.log(arithmetic(1, 2, "add"))