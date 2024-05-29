const convertToCelsius = function (num) {
  let celNum = num - 32;
  let result = Math.round(celNum * 10) / 10;
  return result;
};

const convertToFahrenheit = function (num) {
  let fahrNum = num + 32;
  let result = Math.round(fahrNum * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
