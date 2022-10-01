const repeatString = function(string,times) {
    let repeatedString = []
    if(times >= 0) {
        for(let i = 0;i < times;i++) {
            repeatedString.push(string)
        }
        return repeatedString.join('')
    }else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = repeatString;
