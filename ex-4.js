// Start coding here
let add = (a, b) => a + b

let subtract = (a, b) => a - b

let multiply = (a, b) => a * b

let divide = (a, b) => a / b


let calculator = {add, subtract, multiply, divide};

let addResult = calculator.add(3000, 10)
let divideResult = calculator.divide(3000, 10)

console.log(addResult)
console.log(divideResult)