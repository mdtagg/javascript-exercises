const add = function(...numbers) {
  let sum = numbers.reduce((previousValue,currentValue) => 
    previousValue + currentValue
  )
  return sum
};

const subtract = function(...numbers) {
  let subtracted = numbers.reduce((previousValue,currentValue) => 
    previousValue - currentValue
  )
  return subtracted
};

const sum = function(numbers) {
	let initialValue = 0;
  let sum = numbers.reduce((previousValue,currentValue) => 
    previousValue + currentValue,initialValue
  )
  return parseInt(sum)
};

const multiply = function(numbers) {
  let quotient = numbers.reduce((previousValue,currentValue) => 
  previousValue * currentValue
  )
  return quotient
};

const power = function(firstNumber,secondNumber) {
	const square = firstNumber ** secondNumber
  return square
};

const factorial = function(number) {
  if(number == 0) {
    return 1
  }else {
  const numbers = []
  for(let i = 1;i <= number;i++) {
    numbers.push(i)
  }
	const factorize = numbers.reduce((previousValue,currentValue) => 
  previousValue * currentValue
  )
  return factorize
}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
