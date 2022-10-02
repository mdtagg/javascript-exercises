const fibonacci = function(number) {
    let previousValue = 0
    let nextValue = 1
    let fibNumbers = []
    
    if(number < 0) {
        return 'OOPS'
    }else {
    for(let i = 0; i < number;i++) {
      fibNumbers.push(nextValue)
      nextValue = nextValue + previousValue
      previousValue = nextValue - previousValue
    }
    const fibNumber = fibNumbers[number - 1]
    return fibNumber
}
  };

// Do not edit below this line
module.exports = fibonacci;
