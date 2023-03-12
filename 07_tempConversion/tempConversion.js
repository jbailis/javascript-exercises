const convertToCelsius = function(temp) {
  return formatTemp((temp - 32) * (5 / 9));
};

const convertToFahrenheit = function(temp) {
  return formatTemp((temp * 9 / 5) + 32);
};

const formatTemp = function(temp) {
  return Math.round(temp * 10) / 10;
}
  
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
