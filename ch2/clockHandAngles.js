var totalDay = 86400;
var totalHour = 3600;
var totalMinute = 60;
var days = 0;
var hours = 0;
var minutes = 0;
var seconds = 0;

function clockHandAngles(secondsInput) {
  while(secondsInput>=totalDay) {
    days += 1;
    secondsInput -= totalDay;
  }
  while(secondsInput>=totalHour) {
    hours += 1;
    secondsInput -= totalHour;
  }
  while(secondsInput>=totalMinute) {
    minutes += 1;
    secondsInput -= totalMinute;
  }
  seconds = secondsInput;

  console.log(days);
  console.log(hours);
  console.log(minutes);
  console.log(seconds);
}

clockHandAngles(119730);

STILL TO BE FINISHED
