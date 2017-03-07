function checkLeapYear(year) {
    if ( ((year % 4 == 0)
          &&
          (year % 100 != 0)) || (year % 400 == 0) ) {
        alert(year + ' is a leap');

        return true;
    } else {
        alert(year + ' is NOT a leap');

        return false;
    }
}

alert(checkLeapYear(2012));
alert(checkLeapYear(2013));
