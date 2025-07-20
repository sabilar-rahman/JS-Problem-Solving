function isLeapYear(year) {
    // A year is a leap year if it is divisible by 4, but not by 100, unless it is also divisible by 400.
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  
  // Example usage:
  const year = 2024;


  if (isLeapYear(year)) {
    console.log(`${year} is a leap year. Happy Leap Year!`);
  } else {
    console.log(`${year} is not a leap year. Happy New Year!`);
  }