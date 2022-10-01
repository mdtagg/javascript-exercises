const ftoc = function(temp) {
  const fahrenheit = ((temp - 32) * (5/9)).toFixed(1)
  return parseFloat(fahrenheit)
};

const ctof = function(temp) {
  const celcius = (temp * (9/5) + 32).toFixed(1)
  return parseFloat(celcius)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
