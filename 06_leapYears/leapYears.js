const leapYears = function(year) {

  return validateLeapYear(year);
};

// validate leap year
const runValidation = (validation, errMsg) => data =>
  validation(data) ? true : errMsg;

const validateLeapYear = runValidation(data =>
  data % 4 === 0 && (data % 100 !== 0 || data % 400 === 0), 
  false);


// Do not edit below this line
module.exports = leapYears;
