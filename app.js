const isLeapYear = (year) => {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 1) {
    return true;
  }
  return false;
};

isLeapYear(3000);

exports.isLeapYear = isLeapYear;
