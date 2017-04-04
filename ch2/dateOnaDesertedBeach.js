function weekdayName(weekdayNum) {
  var day;
  switch(weekdayNum) {
    case 1:
      day = "Sunday";
      break;
    case 2:
      day = "Monday";
      break;
    case 3:
      day = "Tuesday";
      break;
    case 4:
      day = "Wednesday";
      break;
    case 5:
      day = "Thursday";
      break;
    case 6:
      day = "Friday";
      break;
    case 7:
      day = "Saturday";
      break;
  }
  console.log(day);
  return day;
}

function weekdayName2(dayNum) {
  dayNum = dayNum % 7;
  var day;
  switch(dayNum) {
    case 1:
      day = "Sunday";
      break;
    case 2:
      day = "Monday";
      break;
    case 3:
      day = "Tuesday";
      break;
    case 4:
      day = "Wednesday";
      break;
    case 5:
      day = "Thursday";
      break;
    case 6:
      day = "Friday";
      break;
    case 7:
      day = "Saturday";
      break;
  }
  console.log(day);
  return day;
}

function someDays() {
  for(i=0; i<18; i++) {
    var day = Math.floor(Math.random() * (366 - 1)) + 1;
    day = weekdayName2(day);

    if(day === "Saturday" || day === "Sunday") {
      console.log("Enjoy your day off");
    } else {
      console.log("Work hard");
    }
  }
}

function dayToMonths(dayNum) {
  var month;
  switch(true) {
    case (dayNum<=31):
      month = "January";
      break;
    case (dayNum>31 && dayNum<=59):
      month = "February";
      break;
    case (dayNum>59 && dayNum<=90):
      month = "March";
      break;
    case (dayNum>90 && dayNum<=120):
      month = "April";
      break;
    case (dayNum>120 && dayNum<=151):
      month = "May";
      break;
    case (dayNum>151 && dayNum<=181):
      month = "June";
      break;
    case (dayNum>181 && dayNum<=212):
      month = "July";
      break;
    case (dayNum>212 && dayNum<=243):
      month = "August";
      break;
    case (dayNum>243 && dayNum<=273):
      month = "September";
      break;
    case (dayNum>273 && dayNum<=304):
      month = "October";
      break;
    case (dayNum>304 && dayNum<=334):
      month = "November";
      break;
    case (dayNum>334 && dayNum<=365):
      month = "December";
      break;
  }
  console.log(month);
  return month;
}

function fullDate(dayNum) {
  var mon = dayToMonths(dayNum);
  var dayName = weekdayName2(dayNum);
  var monthCount = 1;
  var daysInThatMonth = 0;
  var year = new Date().getFullYear();
  var day = 0

  while(dayNum > day) {
    day += monthToDays(monthCount);
    if(dayNum < day) {
      daysInThatMonth = monthToDays(monthCount);
    }
    monthCount += 1;
  }
  day = daysInThatMonth - (day - dayNum);
  console.log(dayName + ", " + mon + " " + day + ", " + year);
  return day;
}
