const isLeapYear = (year) => {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  }
  return false;
};

isLeapYear(2000);

exports.isLeapYear = isLeapYear;
