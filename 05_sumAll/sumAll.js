const sumAll = function(firstNumber,secondNumber) {

    if(firstNumber < 0 || typeof(firstNumber) != 'number' ||
        secondNumber < 0 || typeof(secondNumber) != 'number') {
        return 'ERROR'
    }
    // }else if(typeof(firstNumber) !== number || typeof(secondNumber !== number)) {
    //     return 'ERROR'
    // }

    let iterations = 0
    let startNumber = 0
    let sum = 0

    if(firstNumber > secondNumber) {
        iterations = firstNumber - secondNumber + 1
        startNumber = secondNumber
    } else {
        iterations = secondNumber - firstNumber + 1
        startNumber = firstNumber
    }

    for(let i = 0;i < iterations;i++) {
        sum += startNumber;
        startNumber++
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
