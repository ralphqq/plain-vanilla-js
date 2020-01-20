const ftoc = function(tempInFahrenheit) {
  return roundOneDecimal((5 * (tempInFahrenheit - 32)) / 9);
};

const ctof = function(tempInCelsius) {
  return roundOneDecimal((9 / 5) * tempInCelsius + 32);
};

function roundOneDecimal(num) {
  return Math.round(num * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
