const palindromes = function (string) {

    let splitString = string.split('')
    
    function filterCharacters(characters) {
      if(characters.match(/\w/) !== null) {
        return true
      }else {
        return false
      }
    }
    
    const newArray = splitString.filter(filterCharacters).join('').toLowerCase()
    const reversedString = newArray.split('').reverse().join('')

    if(reversedString === newArray) {
        return true
    }else {
        return false
    }
  };
  

// Do not edit below this line
module.exports = palindromes;
