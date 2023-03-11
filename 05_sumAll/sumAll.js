const sumAll = function(...sumRange) {

  // validate according to spec
  let validationResult;
  for (const e of sumRange) {
    validationResult = validateNumber(e);
    if (validationResult !== true) {
      return validationResult};
  };

  let a, b;

  sumRange.sort((x, y) => x - y);

  [a, b] = [sumRange[0], sumRange[sumRange.length - 1]];

  return (b * (b + 1) - a * (a - 1)) / 2;
};

// data validation
const runValidation = (validation, errMsg) => data => 
  validation(data) ? true : errMsg;

const validateNumber = runValidation(
  data => data && typeof data === 'number' && data > 0,
  "ERROR");


// Do not edit below this line
module.exports = sumAll;
